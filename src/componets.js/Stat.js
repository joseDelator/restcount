import React from 'react';
import {Link } from 'react-router-dom';
import SVGinfo from './svginfo';
const Stat = (props) => {
    const {player} = props;
    return (
        <div className = "cards">
            
            <img src = {player.flag}></img>
            <h2>{player.name}</h2>
            <h3>{player.region}</h3>
            <Link className='link'to={'/details/country/'+ player.name}><SVGinfo /> </Link>
        </div>
       
    )
    
}
export default Stat