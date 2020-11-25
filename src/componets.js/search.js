import React, {Component} from 'react';
import axios from 'axios';
import {ProductConsumer} from '../componets.js/context';
class Search extends Component{
    state = {
        countryname: '',
        prev_length: 0 
    };
    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value});

        console.log(this.state.countryname)
    };
    findcountry = (dispatch, e) =>{
        
        this.setState( { [e.target.name]: e.target.value});
        this.setState({prev_length:this.state.countryname.length})
        console.log(this.state.prev_length)
        if(this.state.prev_length=== 2 && this.state.countryname.length === 1 ){
            axios
        .get('https://restcountries.eu/rest/v2/all?fields=name;flag;region')        
        .then( res =>{
            dispatch({
                type: 'Search_Country',
                payload: res.data
            });
        }

        )
        .catch(
            err => console.log(err)
        )
            
        }else{
        axios
        .get("https://restcountries.eu/rest/v2/name/"+this.state.countryname+'?fields=name;flag;region')        
        .then( res =>{
            dispatch({
                type: 'Search_Country',
                payload: res.data
            });
        }
    
        )
        .catch(
            err => console.log(err)
        )
       }
    };
    
    render(){
       
        return(
           <ProductConsumer>
               {value =>{
                    const {dispatch} = value;
                   return(
                       <div className="search-area">
                           <h1>Search a country</h1>
                           <form onSubmit={this.findcountry.bind(this, dispatch)}>
                               <input type="text" 
                                placeholder ="countires"
                                name ="countryname"
                                value = {this.state.countryname} 
                                onChange = {this.findcountry.bind(this, dispatch)}
                                />
                                
                           </form>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
export default Search;