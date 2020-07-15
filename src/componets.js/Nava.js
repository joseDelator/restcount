import React, { Component} from 'react';

import '../stylenavbar.css'
class Nava extends Component{
    
    state= {
        active: true,
    }
   
   render() { return(
    <div>
    <nav>
    <div className="logo">
        <h2>Fabi Countires</h2>
    </div>
    
    <ul className= {this.state.active ? "links" : "links nav-active" }>
    
        <li><a href="#">Home</a></li>
        <li><a href="connectwithus.html">Connect</a></li>
        <li><a href="gala.html">Projects</a></li>
        <li><a href="about.html">About</a></li>
        
    </ul>
    <div className="burger" onClick = {() => this.setState({active: !this.state.active})}>
        <div className={this.state.active ? "line1" : " toggle1 line1 " }></div>
        <div className ={this.state.active ? "line2" : " toggle2 line2 " }></div>
        <div className={this.state.active ? "line3" : " toggle3 line3 " }></div>
        
    </div>
</nav>

</div>
    )
}
}
export default Nava