import React, {Component} from 'react';
import axios from 'axios';
import {ProductConsumer} from '../componets.js/context';
class Search extends Component{
    state = {
        countryname: ''
    };
    onChange = ( e) => {
        this.setState( { [e.target.name]: e.target.value});
           
        };
    
    findcountry = (dispatch, e) =>{
       // this.setState( { [e.target.name]: e.target.value});
        e.preventDefault(); 
        /* 
        if(this.state.countryname ===''){
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
            
        }else{*/
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
    //    }
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
                                onChange = {this.onChange}
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