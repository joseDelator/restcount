import React, {Component} from 'react';
import axios from 'axios'
const context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'Search_Country':
        return{
            ...state,
            player: action.payload
        };
        default:
            return state;
    }
}
class Provider extends Component{
    state = {
        player:[],
        dispatch: action => this.setState(state => reducer(state, action ))
    };

    componentDidMount(){
        
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;flag;region')

        .then(res => {
        
            this.setState({player: res.data});
            })
        .catch(err => console.log(err))
    

}

    render(){
        return(
            <context.Provider value ={this.state}>
            {this.props.children}
            </context.Provider>
        )
    }
}
const ProductConsumer = context.Consumer;
export {Provider, ProductConsumer}