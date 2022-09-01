import React, { useState } from 'react';

const Selection = (props) => {

    const [backgroundColor, updateSelectionStyle] = useState({background: ""});

    // console.log(backgroundColor)

    // setBackgroundColor

    return(
    <>
    <div className='fix-box' style={backgroundColor} 
        onClick={() => props.applyColor(updateSelectionStyle)} >
        <h2 className='subheading'>Selection</h2>
    </div>
    </>
    );
};

export default Selection;