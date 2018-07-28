import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import QuizSelect from './mainComponents/QuizSelect';
import GeneralKnowledge from './mainComponents/GeneralKnowledge';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={QuizSelect} exact />
            <Route path="/generalKnowledge" component={GeneralKnowledge} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
