import React from 'react';

const TitleHeader = (props) => {

  return (
  
    <div className="wideDiv">
        <h1>{props.title}</h1>
        <img className="Slider" src={props.src} alt="sliding questionmark" />
    </div>

  );
  
}

export default TitleHeader;