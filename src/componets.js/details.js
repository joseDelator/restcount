import React, { Component} from 'react'
import '../details.css'
import axios from 'axios'

class Details extends Component {
    state = {
        player:[],
        bloc: [], 
        lang: [],
        tran: {},
        curn: [], 
        active: false,
        population:'',
        acres: ''
        
    };
    

    componentDidMount(){
        
        axios.get('https://restcountries.eu/rest/v2/name/'+ this.props.match.params.id+"?fullText=true")

        .then(res => {
            
            this.setState({player: res.data[0]});
            this.setState({bloc: res.data[0].regionalBlocs});
            this.setState({lang: res.data[0].languages});
            this.setState({tran:res.data[0].translations});
            this.setState({curn: res.data[0].currencies});
            this.setState({population:res.data[0].population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')});
            this.setState({acres:res.data[0].area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')})
            })
        .catch(err => console.log(err))
    

}


    render(){
        const {player, bloc, lang, tran, curn, population, acres}= this.state;
      
          
        
       // console.log(player)
        return(
            <React.Fragment>
                <div className="details">
                    <div className="info" >
                        <h1>{player.name}</h1>
                        <h4>{player.nativeName}</h4>
                        <h5>Capital: {player.capital}</h5>
                        <img  className={player.name !== 'Nepal' ? "flag" : "nepal" } alt="Country Flag" src={player.flag}></img>
                    </div>
                    <div className="info">
                        <h2>Size</h2>
                            <h4>{population} People</h4>
                            <h4>{acres} Acres</h4>
                            
                    </div>
                    <div className="info">
                    <h2>Languages</h2>
                            {lang.map(item =>(
                            <h4 key={item.name}>{item.name}</h4>
                        ))}
                        <h3>translations</h3>
                            <h4>Spainish: {tran.es}</h4>
                            <h4>French: {tran.fr}</h4>
                            <h4>Italian: {tran.it}</h4>
                            <h4>Japanies: {tran.ja}</h4>
                            
                        </div>
                    <div className="info">
                    <h2>Region</h2>
                        <h4>{ player.region}</h4>
                        <h4>{player.subregion}</h4>
                        <h4>{player.timezones}</h4>
                            <h4>CallingCode: {player.callingCodes}</h4>
                        {bloc.map(item =>(
                            <h4 key = {item.name}>{item.name}</h4>
                        ))}
                    </div>
                    <div className="info">
                        <h2>Currencies</h2>
                       {curn.map(
                           item =>(
                            <h4 key={item.name}>Name: {item.name}</h4>
                           
                           )
                       )}
                       {curn.map(
                           item =>(
                            <h4 key= {item.symbol}>Symbol: {item.symbol}</h4>
                           
                           )
                       )}
                    </div>
                </div>
            </React.Fragment> 
        )
            
        
    }
}
export default Details;