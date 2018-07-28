import React from 'react';
import { NavLink } from 'react-router-dom';

import ImagePaths from '../subComponents/ImagePaths';
import TitleHeader from '../subComponents/TitleHeader';
import QuestionComponent from '../subComponents/QuestionComponent';

class History extends React.Component {

    render() {
        
        return (

            <div>

              <NavLink to="/" id="homeLink">Quiz Select</NavLink>
            
              <TitleHeader title="History" src={ImagePaths.history} />
            
              <div className="wideDiv">
            
                <h4>Questions</h4>
            
                <div className="narrowDiv">
            
                  <QuestionComponent
                      question = "1: King Henry VIII was a member of what family that ruled England in the Sixteenth Century?"
                      answer   = "Tudors" />

                  <QuestionComponent
                      question = "2: What invasion of mainland Europe was launched on 6th June 1944?"
                      answer   = "Operation Overlord (D-Day)" />
                  
                  <QuestionComponent
                      question = "3: Which Carthaginian general led an army across the Alps to attack the Roman Empire?"
                      answer   = "Hannibal" />

                  <QuestionComponent
                      question = "4: Who was prime minister of the United Kingdom during the First Gulf War?"
                      answer   = "Sir John Major" />

                  <QuestionComponent
                      question = "5: What scandal led to the impeachment and resignation of U.S. President Richard Nixon?"
                      answer   = "The Watergate Scandal" />
                
                  <QuestionComponent
                      question = "6: In what year was the Great Fire of London?"
                      answer   = "1666" />

                  <QuestionComponent
                      question = "7: Who was the first European to map the Hawaiian Islands?"
                      answer   = "Captain James Cook" />

                  <QuestionComponent
                      question = "8: Who reputedly brought potatoes back to England?"
                      answer   = "Sir Walter Raleigh" />

                  <QuestionComponent
                      question = "9: In what year was the Battle of Hastings fought?"
                      answer   = "1066" />

                  <QuestionComponent
                      question = "10: In Ancient Greek mythology, who is the father of Hercules?"
                      answer   = "Zeus" />

                </div>

              </div>

            </div>
        );

    }

}

export default History;