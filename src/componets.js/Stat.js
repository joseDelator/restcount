import React from 'react';
import {Link } from 'react-router-dom';

const Stat = (props) => {
    const {player} = props;
    return (
        <Link className='link' to={'/details/country/'+ player.name}>
        <div className = "cards">
            
            <img  alt='Country Flag' src = {player.flag}></img>
            <h2>{player.name}</h2>
            <h3>{player.region}</h3>
            
        </div>
        </Link>
    )
    
}
export default Stat