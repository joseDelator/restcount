import React, {Component, } from 'react';
import Svgfile from './svhfile'

class Up_UP extends Component{
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


 render(){ 
     return(
    <a href='#containerbig' className={ this.state.scrolled ? "up_up":"top"}>
            <Svgfile />
        </a>
     )   
 }
}
export default Up_UP