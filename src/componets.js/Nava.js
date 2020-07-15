import React, { Component} from 'react';
import {Link } from 'react-router-dom';
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
    <div className="homebutton">
        <Link to="/" id="homelink">Home</Link>
    </div>
    <ul className= {this.state.active ? "links" : "links nav-active" }>
    
        <li><a href="https://github.com/joseDelator/restcount/tree/master/src">git_hub</a></li>
        
        <li><a href="https://github.com/joseDelator?tab=repositories">Projects</a></li>
        <li><a href="https://www.linkedin.com/in/jose-de-la-torre-b58126161">About</a></li>
        
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