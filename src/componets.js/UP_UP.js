import React, {Component, } from 'react';
import Svgfile from './svhfile'

class Up extends Component{
 state={
     scrolled: false, 
    
 }
 
componentDidMount(){
    window.addEventListener('scroll', () =>{
      const isTop = window.scrollY < 200; 
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
    <a href='google.com' className={ this.state.scrolled ? "up_up":"top"}>
            <Svgfile />
        </a>
     )   
 }
}
export default Up