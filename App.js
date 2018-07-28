import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import QuizSelect from './mainComponents/QuizSelect';
import GeneralKnowledge from './mainComponents/GeneralKnowledge';
import Geography from './mainComponents/Geography';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={QuizSelect} exact />
            <Route path="/generalKnowledge" component={GeneralKnowledge} />
            <Route path="/geography" component={Geography} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;