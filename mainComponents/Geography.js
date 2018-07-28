import React from 'react';
import { NavLink } from 'react-router-dom';

import ImagePaths from '../subComponents/ImagePaths';
import TitleHeader from '../subComponents/TitleHeader';
import QuestionComponent from '../subComponents/QuestionComponent';

class Geography extends React.Component {

    render() {
        
        return (

            <div>

              <NavLink to="/" id="homeLink">Quiz Select</NavLink>
            
              <TitleHeader title="Geography" src={ImagePaths.geography} />
            
              <div className="wideDiv">
            
                <h4>Questions</h4>
            
                <div className="narrowDiv">
            
                  <QuestionComponent
                      question = "1: What is the longest river in the world?"
                      answer   = "The Nile" />

                  <QuestionComponent
                      question = "2: What two countries share lands with Sweden?"
                      answer   = "Finland and Norway" />
                  
                  <QuestionComponent
                      question = "3: What is the highest mountain in England?"
                      answer   = "Scafell Pike" />

                  <QuestionComponent
                      question = "4: What ocean separates the United States of America from the United Kingdom?"
                      answer   = "The Atlantic Ocean" />

                  <QuestionComponent
                      question = "5: What imaginary line separates the Earth's Northern and Southern Hemispheres?"
                      answer   = "The Equator" />
                
                  <QuestionComponent
                      question = "6: What is the capital city of France?"
                      answer   = "Paris" />

                  <QuestionComponent
                      question = "7: What mountain range runs along the western side of South America?"
                      answer   = "The Andes" />

                  <QuestionComponent
                      question = "8: Jersey and Guernsey are two islands that belong to what archipelago?"
                      answer   = "The Channel Islands" />

                  <QuestionComponent
                      question = "9: In which English county is the Lake District located?"
                      answer   = "Cumbria" />

                  <QuestionComponent
                      question = "10: The Mediterranean Sea lies between what two continents?"
                      answer   = "Europe and Africa" />

                </div>

              </div>

            </div>
        );

    }

}

export default Geography;