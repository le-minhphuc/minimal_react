import React, { useState } from 'react';

function ExampleStateHook() {
    // declare a new state variable called "count"
    // recall that inside a function component, we have no "this", so we can't assign or
    // read "this.state"
    // TODO: I thought every Javascript function has a "this"? Why does this function
    // component have no "this"?
    //
    // Normally, a locally scoped variable "disappears" when the function exits, but
    // state variables are preserved by React.
    const [count, setCount] = useState(0);

    // Good qn: you might be curious about how React knows which (function) component
    // an invocation of `useState` corresponds to since we're not passing anything like
    // `this` back to React.

    return (
        <div>
            {/* Do not need this.state.count, just count! */}
            <p>You clicked { count } times!</p>
            {/* In a function, we already have count and setCount as variables, so
                we don't need `this`. */}
            <button onClick={ () => setCount(count + 1) }>
                Click me
            </button>
        </div>
    );
}
