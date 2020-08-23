import React from 'react';

function ConditionalClock(props) {
    const clock = props.useHighResolutionClock
        ? (<h1>High resolution clock</h1>)
        : null;
    return (
        <div>
            <h1>The type of clock we want to use:</h1>
            { clock }
        </div>
    )
}

export default ConditionalClock;
