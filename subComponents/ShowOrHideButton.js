import React from 'react';

const ShowOrHideButton = (props) => {

    return (
        
        <button onClick={props.onClick}>{props.buttonLabel}</button>
          
    );

}

export default ShowOrHideButton;