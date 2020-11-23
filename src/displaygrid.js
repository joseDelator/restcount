import React, { Component} from 'react';
import './display.css'
import Stats from './componets.js/states'
import Search from './componets.js/search'

class Display extends Component{
    
    render() { return(
        <div>
            <Search />
            <div id="containerbig">
                <Stats />
            </div>
            
        </div>
        )
    }
}
export default Display