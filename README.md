# Create a skeleton ReactJS application from scratch

1. Initialize an empty `package.json` file using `npm` command line utility

        npm init --yes

2. Install `react`, `react-dom` and `react-scripts` using `npm` and save them to `package.json`

        npm install react --save
        npm install react-dom --save
        npm install react-scripts --save

3. Create minimal `index.html` and `index.js` file

```html
<DOCTYPE! HTML>
<html>
    <head></head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

```js
import React from 'react'; // without this, you can't create a React element
import ReactDOM from 'react-dom'; // without this, you can't render your React element to DOM

// The line below is secretly transpiled to a React.createElement call by Babel
const helloWorldElem = (<h1>Hello, World!</h1>);
ReactDOM.render(helloWorldElem, document.getElementById("root"));
```

4. Now we need to somehow "serve" those minimal html and js files. Here's where we need `react-scripts`. First, add the following script to `package.json`

        "start": "react-scripts start",

This tells `npm` that if we type `npm run start`, it should invoke `react-scripts start`.

5. If you invoke `npm run start` now, it will complain that `index.html` must be inside `public/` and `index.js` must be inside `src/`. Fine, let's do what it wants and run again:

        mkdir public && mv index.html public/
        mkdir src && mv index.js src/
        npm run start

TADA! A browser is open with Hello, World! printed in bold!
