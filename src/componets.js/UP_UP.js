import React, {Component, } from 'react';
import Svgfile from './svhfile'

class Up extends Component{
 state={
     scrolled: false, 
    
 }
 
componentDidMount(){
    window.addEventListener('scroll', () =>{
      const isTop = window.scrollY < 450; 
      if(isTop !== true) {
        this.setState({scrolled: true}) 
      }else{
          this.setState({ scrolled:false})
      }
    
    })
}

componentWillUnmount(){
    window.removeEventListener('scroll', () =>{});
}

 render(){ 
     return(
    <a href="#" className={ this.state.scrolled ? "up_up":"top"}>
            <Svgfile />
        </a>
     )   
 }
}
export default Up