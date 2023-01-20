# [**Website View**](https://code-xam.vercel.app/docs/react/react4)

## ⭐ Introducing JSX

Let's start with a simple example
    
Consider this variable declaration:

```jsx
    const element = <h1>Hello, world!</h1>;
```
<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://media.giphy.com/media/jzrlZkvvRgaPLkAlF1/giphy.gif"
                 width="450"/>
</p>

This funny tag syntax is neither a string nor HTML.

JSX stands for JavaScript XML, and it is a syntax extension for JavaScript. It allows you to write HTML-like elements in your JavaScript code, which can then be rendered on a webpage.

Before we dive into JSX, let's talk about `index.js`

Can you explain what is inside index.js 😥❓
          
```jsx filename="index.js" showLineNumbers
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);

reportWebVitals();
```

Why we are use `import` here ?

We import libraries and modules in JavaScript to use their additional functionality in our code. In this specific code, we import React and ReactDOM to use their functions and methods to build and render a React application, import './index.css' for styling and import App and reportWebVitals functions for the main component and for collecting performance metrics respectively. This way we don't have to build everything from scratch and it makes our code more maintainable.



`import React from 'react';:`

This line is importing the React library, which is necessary for building React applications. React provides the tools to create and manage components, which are the building blocks of a React application.

`import ReactDOM from 'react-dom/client';:`

This line is importing the ReactDOM library, which is used to interact with the Document Object Model (DOM) and render React components on a webpage. ReactDOM provides methods such as render() and createRoot() which are used to mount and update the React components on the DOM.

- `import './index.css';:`

This line is importing a CSS file called 'index.css' from the same application folder, which is used to apply styling to the application.

- `import App from './App';:`

This line is importing the main component of the application, called App. The App component is the starting point of the application and it contains other components that make up the application.


- `import reportWebVitals from './reportWebVitals';:`

This line is importing a function called reportWebVitals() from the same application folder, which is used to collect and report performance metrics of the application.
- Const Root Explain

`const root = ReactDOM.createRoot(document.getElementById('root'));`

- The first line is creating a root container element using the ReactDOM.createRoot() method.
 - The createRoot() method creates a new root container that can be used to render multiple components on the webpage. It takes as argument the reference to an existing DOM node, in this case, the element with an id of 'root' from the HTML file. It creates a new root container by passing the element with an id 'root' from the HTML file.

In simpler terms, ReactDOM.createRoot() method creates a special container that holds multiple React components, it uses the element with the id 'root' from the HTML file as the spot to place the container and make the components visible on the webpage.

<img align="center"  src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202023%20(Better)/04.%20JSX/Assets/1.png?raw=true" alt="example" />

You can use document.getElementById('root') to get a reference to that element, which can be used to manipulate it later with JavaScript. In this case, it's being passed to ReactDOM.createRoot() to create a root container that can be used to render multiple components on the webpage.

`root.render( <React.StrictMode> <App /> </React.StrictMode>);:`

React.StrictMode is a tool that helps you to find and fix problems in your React application. It's like a helper that checks your code for potential issues and let you know about them. It's mainly used during development and it is not necessary in production.

You can think of it like a "safety net" for your application, it helps you to make sure that everything is working as expected, and it helps you to improve the quality of your code.

In the specific code, React.StrictMode is used to wrap the main App component. When the App component is rendered inside the root container wrapped by React.StrictMode, React will check for potential problems in the application and provide additional warnings to help you to fix them.


In summary, the ReactDOM.createRoot() method is used to create a root container that can be used to render multiple components on the webpage and the render() method of the root element is used to render the App component wrapped in a ```React.StrictMode``` on the webpage.


reportWebVitals();: This line is calling the reportWebVitals() function, which can be used to collect and report performance metrics of the application.

            
if you use ``div``instead of React.StrictMode or ````<>```` then it will still render the App component but it will not have the benefits of Strict mode, like highlighting potential problems in the application.




Let's understand JSX in detail

**Definition**: JSX is a syntax extension for JavaScript that allows you to write HTML-like elements and components in your JavaScript code.


 In simple words, JSX is a combination of JavaScript and HTML. It is a syntax extension for JavaScript that allows you to write HTML-like elements and components in your JavaScript code.

```js
  const element = <h1>Hello, World!</h1>;
  ReactDOM.render(element, document.getElementById('root'));
```
In this example, const element is a JSX element that represents an ``<h1>`` tag with the text "Hello, World!". The ``ReactDOM.render()`` function is used to render the JSX element on the webpage, and the ```document.getElementById('root')``` specifies where in the HTML the element should be rendered.

 


## ⭐ Experiment


Let's experiment with JSX

  Don't worry this is a very simple experiment and you will understand it very easily.
<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://media.giphy.com/media/1adUfsEx21ELVLx7Fl/giphy.gif"
                 width="450"/>
        </p>

### Step 1

Let's create a variable and assign it in JSX format.

Open `src/App.js` and add the following code to it:

```js /{name}/
let name = "Subham"

function App() {
  return (
      <>
        <div className="container">
          <h1>Hello {name}</h1>
         </div>
      </>
  );
}

export default App;
```




<img  align="center"  src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202023%20(Better)/04.%20JSX/Assets/2.png?raw=true" alt="example" />
   
### Step 2

Now open your terminal and run the following command:
```bash
  npm start
 ```
#### ⚡ [Playground](https://stackblitz.com/edit/react-ts-drslwn?file=App.tsx&hideDevTools=1)
        

some key points to remember:

- Use lowercase for HTML elements, like ```<div>```, ``<p>``, and `<h1>`.
   
   
- Use camelCase for custom components, like `<MyComponent>`.


- Use className instead of class to define CSS classes.


- Use htmlFor instead of for to define labels for form elements.


- Use self-closing tags for elements that don't have any children, like ```<img/>```.


- Nest elements inside of other elements to create a hierarchy, like ```<div><p>Hello</p></div>```.
    
- Use curly braces ```{}``` to include JavaScript expressions or variables within JSX, like ```<p>{variable}</p>.```
    
- Always close tags, even if they are self-closing, like ```<img />```
    
- JSX should always have a parent element, so it should not return multiple element, if so, it should be wrapped in a div or fragment like ``<>`` or React.Fragment
    
- If you want to return two elements using JSX you have to use the JSX Fragment
    
- Feature or wrap the whole content in one element.


## ⭐ Function & Class Components

Explain Function & Class Components


<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://media.giphy.com/media/9zdNuFE53CDJNpnfBD/giphy.gif"
                 width="450"/>
     </p>
        In React, there are two main ways to create a component: function-based components and class-based components.

A function-based component is a JavaScript function that returns JSX (HTML-like elements and components) to be rendered on the page. These components are simple, easy to understand and read. They are defined using the function keyword and they are also known as stateless components.
    Here is an example of a simple function-based component:

```jsx
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
```
A class-based component, on the other hand, is a JavaScript class that extends the React.Component class and has a render() method. The render() method returns JSX to be rendered on the page. These components are a bit more complex than function-based components as they can have their own internal state and lifecycle methods. They are defined using the class keyword and they are also known as stateful components.

Here is an example of a simple class-based component:
```jsx
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
  }
```
Nowadays, function-based components are primarily used and recommended to be used. The main reason is that they are simpler and easier to understand, and they also have better performance than class-based components.

It's good to know both the ways of creating a component in React, but it's recommended to use function-based components unless you need to use the additional features that class-based components provide.





