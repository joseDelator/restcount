import React, { Component} from 'react';
import './display.css'
import Stats from './componets.js/states'
import Search from './componets.js/search'

import Up from './componets.js/UP_UP'
class Display extends Component{
    
    render() { return(
        <div>
            <Search />
            <div id="containerbig">
                <Stats />
            </div>
            <Up />
        </div>
        )
    }
}
export default Display