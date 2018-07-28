import React from 'react';

const Answer = (props) => {

    if (props.show) {
      return <p>{props.answer}</p>
    }

    return <p style={{visibility: "hidden"}}>{props.answer}</p>;

}

export default Answer;