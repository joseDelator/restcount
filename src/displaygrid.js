import React, { Component} from 'react';
import './display.css'
import Stats from './componets.js/states'
import Search from './componets.js/search'
import Svgfile from './componets.js/svhfile'

class Display extends Component{
    
    render() { return(
        <div>
            <Search />
            <div id="containerbig">
                <Stats />
            </div>
            
        <a href='#containerbig' id="up_up">
            <Svgfile />
        </a>
        </div>
      
        )
    }
}
export default Display