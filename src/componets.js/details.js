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
        
    };

    componentDidMount(){
        
        axios.get('https://restcountries.eu/rest/v2/name/'+ this.props.match.params.id)

        .then(res => {
            
            this.setState({player: res.data[0]});
            this.setState({bloc: res.data[0].regionalBlocs});
            this.setState({lang: res.data[0].languages});
            this.setState({tran:res.data[0].translations});
            this.setState({curn: res.data[0].currencies})
            })
        .catch(err => console.log(err))
    

}

    render(){
        const {player, bloc, lang, tran, curn}= this.state;
        console.log(player)
        return(
            <React.Fragment>
                <div className="details">
                    <div className="info" >
                        <h1>{player.name}</h1>
                        <h4>{player.nativeName}</h4>
                        <img  className={player.name !== 'Nepal' ? "flag" : "nepal" } alt="Country Flag" src={player.flag}></img>
                    </div>
                    <div className="info">
                        <h2>Size</h2>
                            <ul>{player.population} People</ul>
                            <ul>{player.area} Acres</ul>
                            
                    </div>
                    <div className="info">
                    <h2>Languages</h2>
                            {lang.map(item =>(
                            <ul>{item.name}</ul>
                        ))}
                        <h3>translations</h3>
                            <ul>Spainish: {tran.es}</ul>
                            <ul>French: {tran.fr}</ul>
                            <ul>Italian: {tran.it}</ul>
                            <ul>Japanies: {tran.ja}</ul>
                            
                        </div>
                    <div className="info">
                    <h2>Region</h2>
                        <ul>{ player.region}</ul>
                        <ul>{player.subregion}</ul>
                        <ul>{player.timezones}</ul>
                            <ul>CallingCode: {player.callingCodes}</ul>
                        {bloc.map(item =>(
                            <ui>{item.name}</ui>
                        ))}
                    </div>
                    <div className="info">
                        <h2>Currencies</h2>
                       {curn.map(
                           item =>(
                            <ul>Name: {item.name}</ul>
                           
                           )
                       )}
                       {curn.map(
                           item =>(
                            <ul>Symbol: {item.symbol}</ul>
                           
                           )
                       )}
                    </div>
                </div>
            </React.Fragment> 
        )
            
        
    }
}
export default Details;