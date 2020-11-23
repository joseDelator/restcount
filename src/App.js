import React, {Component} from 'react';
import Nava from'./componets.js/Nava.js';
import Display from './displaygrid';
import './App.css';
import { Provider } from './componets.js/context.js';
import Details from './componets.js/details';
import Up from './componets.js/UP_UP'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
  

class App extends Component{
  render(){
    return (
      <Provider>
        <div className="App">
          <Router>
            <React.Fragment>
              <Nava />
              
              <Switch>
                <Route exact path="/" component={Display} />
                <Route  exact path="/details/country/:id" component={Details}/>
                
              </Switch>
            </React.Fragment>
          </Router>
          <Up/>
        </div>
      </Provider>
    );
  }
}
export default App;
