import React, { Component} from 'react';
import './display.css'
import Stats from './componets.js/states'
import Search from './componets.js/search'
import Svgfile from './componets.js/svhfile'
import Up_UP from './componets.js/UP_UP'
class Display extends Component{
    
    render() { return(
        <div>
            <Search />
            <div id="containerbig">
                <Stats />
            </div>
            <Up_UP />
        </div>
        )
    }
}
export default Display