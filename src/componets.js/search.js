import React, {Component} from 'react';
import axios from 'axios';
import {ProductConsumer} from '../componets.js/context';
class Search extends Component{
    state = {
        countryname: '',
        prev_length: 0 
    };
     onChange = (e) => {
        this.setState( { countryname: e.target.value});
        this.some(e.target.value)
        
        console.log(e.target.value)
        
    };
    some(vlaue){
        this.setState({countryname: vlaue})
    }
    findcountry = (dispatch, e) =>{
        var value = e.target.value;
        this.setState( { [e.target.name]: e.target.value});
        
       
        if(value ==="" ){
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
        .get("https://restcountries.eu/rest/v2/name/"+value+'?fields=name;flag;region')        
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
                               onChange={ this.onChange} 
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