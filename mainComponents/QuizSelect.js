import React from 'react';
import { NavLink } from 'react-router-dom';

import TitleHeader from '../subComponents/TitleHeader';
import ImagePaths from '../subComponents/ImagePaths';

const QuizSelect = () => {

    let QuestionMark = QuestionMark;

    return (
        <div>
            <NavLink to="/" id="homeLink">Quiz Select</NavLink>
            <TitleHeader title="Quiz Select" src={ImagePaths.questionMark} />
            <div id="quizSelectors">
                <NavLink to="/generalKnowledge" className="quizLink">General Knowledge</NavLink>
                <NavLink to="/history" className="quizLink">History</NavLink>
                <NavLink to="/entertainment" className="quizLink">Entertainment</NavLink>
            </div>
        </div>
    );
}

export default QuizSelect;