import React from 'react';

import ShowOrHideButton from './ShowOrHideButton';
import Question  from './Question';
import Answer  from './Answer';

class QuestionComponent extends React.Component {

    constructor(props) {

        super(props);
        
        this.state = {show       : false,
                      buttonLabel: "Show Answer"};
        
        this.hideOrShowAnswer = this.hideOrShowAnswer.bind(this);
    
    }

    hideOrShowAnswer() {

        const makeVisible    = this.state.show        === false ? true : false;
        const setButtonLabel = this.state.buttonLabel === "Show Answer" ? "Hide Answer" : "Show Answer"; 
        
        this.setState({show: makeVisible});
        this.setState({buttonLabel: setButtonLabel});
    
    }

    render() {

      return (

        <div>
            <Question question={this.props.question} />
            <ShowOrHideButton onClick={this.hideOrShowAnswer} buttonLabel={this.state.buttonLabel} />
            <Answer show={this.state.show} answer={this.props.answer} />
        </div>
      
        );
    
    }

}

export default QuestionComponent;