import React, {Component, } from 'react';
import Spiner from '../spiner.js';
import {ProductConsumer} from  './context.js'; 
import Stat from './Stat'

class Stats extends Component{

  
 render(){
    
     return(
         
         <ProductConsumer>

             {value=>{
                 const {player}= value;
                 console.log(value);
                 if(player.lenght ===0 || player === undefined){
                     return <Spiner/>;
                 }
                 else{
                 return (

                     <React.Fragment>
                        <div className = "container">
                            
                           {player.map(item =>(
                               <Stat  key= {item.name} player={item}/>
                           ))}
                        </div>
                    </React.Fragment>

                 )
               
             }}}
         </ProductConsumer>
     )
 }
}

export default Stats