import React, { useState, useEffect } from 'react';

function ExampleEffectHook() {
    const [count, setCount] = useState(0); // array de-structuring syntax

    // equivalent to componentDidMount and componentDidUpdate:
    // + invoke once when component attached to the DOM
    // + invoke every time component changes are done flushing to the DOM
    //
    // By default, React runs the effects after every render, including
    // the first render.
    //
    // Important understanding: using a lambda here is EXTREMELY IMPORTANT!
    // The function passed to useEffect is going to be different on every render.
    // This is intentional. In fact, this is what lets us read the `count` value
    // from inside the effect without worrying about it getting stale.
    // Every time we re-render, we schedule a different effect, replacing the previous one.
    // In a way, this makes the effects behave more like a part of the rendered result -
    // each effect "belongs" to a particular render. We'll see why this is useful later!
    useEffect(() => {
        // update the document title using the browser API
        document.title = `Clicked ${count} times`;
    });

    return (
        <div>
            <p> You clicked { count } times!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
        </div>
    );
}

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

        // fire this callback when either
        // 1. component unmount
        // 2. before re-running the effect due to subsequent renders
        return () => {
            ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange);
        };
    });
    if (isOnline === null)
        return 'Loading ...';
    else
        return isOnline ? 'Online' : 'Offline';
}

// Point demonstrated here:
// Hooks let you organize side effects in a component by what pieces are related
// (such as adding and removing a subscription), rather than forcing a split
// based on life-cycle methods.

export default ExampleEffectHook;
