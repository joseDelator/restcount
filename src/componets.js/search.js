import React, {Component} from 'react';
import axios from 'axios';
import {ProductConsumer} from '../componets.js/context';
class Search extends Component{
    state = {
        countryname: '',
        NOcountry: false
         
    };
    onSubmit1= e =>{
        e.preventDefault();
    }
    findcountry = (dispatch, e) =>{
        e.preventDefault();
        var value = e.target.value;
        this.setState( { [e.target.name]: e.target.value});
        
       
        if(value ==="" ){
            axios
        .get('https://restcountries.eu/rest/v2/all?fields=name;flag;region') 

        .then( res =>{
            this.setState({NOcountry:false})
            dispatch({
                type: 'Search_Country',
                payload: res.data
            });
        })
        .catch(
            err =>{ 
            console.log(err); 
        })
      
        }else{

        axios
        .get("https://restcountries.eu/rest/v2/name/"+value+'?fields=name;flag;region')        
        .then( res =>{
            this.setState({NOcountry: false})
            dispatch({
                type: 'Search_Country',
                payload: res.data
            });
        }
    
        )
        .catch(
            err => {
            console.log(err)
            this.setState({NOcountry: true})
           
         } )
       }
    };

    
    render(){

      const NotfoundRes = ()=>{
          if(this.state.NOcountry === true)
      return <h5 className="not for message">{this.state.countryname} not found!!!!!</h5>
       };
        return(
           <ProductConsumer>
               {value =>{
                    const {dispatch} = value;
                   return(
                       <div className="search-area">
                           <h1>Search a country</h1>
                           <form onSubmit={this.onSubmit1}>
                               <input type="text" 
                                placeholder ="Search"
                                name ="countryname"
                                value = {this.state.countryname}
                               onChange={ this.onChange} 
                                onChange = {this.findcountry.bind(this, dispatch)}
                                
                                
                                />
                                
                           </form>
                           {NotfoundRes()}
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
export default Search;