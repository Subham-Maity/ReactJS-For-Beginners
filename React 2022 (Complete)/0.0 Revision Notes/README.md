# Written By CodeXam
### **_In this revision note you will create a simple react app and you will learn how to use React in simple way_.**

List of Revision React Note
#### ◘ Chapter 1 - Basic Project Setup
- [**We Need This**](#we-need-this)
- [**1. Create Our React App**](#1-create-our-react-app)
- [**2. Start Our React App**](#2-start-our-react-app)
- [**3. You can see the result in browser**](#3-you-can-see-the-result-in-browser)
- [**4. In the src folder we have App.js file (JSX)**](#4-in-the-src-folder-we-have-appjs-file-jsx)
- [**5. Components in React**](#5-components-in-react)
- [**6. Css in App.js**](#6-css-in-appjs)
- [**7. Wrap the code in <> </> tag**](#7-wrap-the-code-in---tag)
- [**8. Use bootstrap in React**](#8-use-bootstrap-in-react)
- [**9. Use bootstrap Component in React and Error Handling**](#9-use-bootstrap-component-in-react-and-error-handling)
- [**10. App name change**](#10-app-name-change)
- [**11. Customize your navbar according to your need**](#11-customize-your-navbar-according-to-your-need)
#### ◘ Chapter 2 - Components Create
- [**12. First Functional Based Component - Header.js make and import it in App.js**](#12-first-functional-based-component---headerjs-make-and-import-it-in-appjs)
- [**13. Create Another Components using react Arrow Function Component and import it in App.js**](#13-create-another-components-using-react-arrow-function-component-and-import-it-in-appjs)
#### ◘ Chapter 3 - Props 
- [**14. Props in React**](#14-props-in-react)
- [**15. Using Props Conditional rendering in React - using the ternary operator**](#15-using-props-conditional-rendering-in-react---using-the-ternary-operator)
- [**16. PropTypes in React**](#16-proptypes-in-react)
- [**17. DefaultProps in React**](#17-defaultprops-in-react)
#### ◘ Chapter 4 - Components Setup 
- [**18.1 Props , Array and Passing Props to Child Component setup**](#u-181-props--array-and-passing-props-to-child-component-setupu)
- [**18.2 Using for Loop in React**](#u-182-using-for-loop-in-reactu)





************
## We Need This 
* [NodeJS Download From here](https://nodejs.org/en/download/)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)
* [VsCode](https://code.visualstudio.com/)
* [Vs Extension Thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

* [Vs Extension  ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

* [Vs Extension Bracket pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

* [Vs Extension Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

* [Vs Extension Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

* [Vs Extension Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

 **Extra**
* [WebStorm](https://www.jetbrains.com/webstorm/)

### 1. Create Our React App  
```npx create-react-app my-app```  
```cd my-app```  
```npm start```

If you want to install just dependencies then use this command  
```npm install```
#### My Experiment 

Open Any Folder in VsCode and open terminal and run this command
```
npx create-react-app todos-list
```
### 2. Start Our React App
```npm start```
### 3. You can see the result in browser 
```http://localhost:3000/```
even you can check the same website in your mobile by using the same link
On your Network
```http://192.....:3000/```

### 4. In the src folder we have App.js file (JSX)
```App.js``` is the main file of our React App.

```Let's explore the code```
```jsx
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

```
Inside function the code which is similar to html is called ```jsx```

 JSX - JavaScript XML

JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

Suppose I use ```<div> {2+5} </div>``` in JSX then it will show 7 in the browser. When I use curly braces in JSX react will understand that it is JavaScript code.


Example
If I create a variable you can see the result in the browser by using ```{variableName}```

```jsx
function App() {
  let myVariable = 1;//variable declaration 
  return (
   <div> {myVariable}</div>//variable use in jsx
  );
}

export default App;
```

### 5. Components in React
We have two types of components in React 
* Class Component
* Functional Component
#### Class Component
```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
```
#### Functional Component
```jsx
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
```
We are gonna use Functional Component in this revision notes.

### 6. Css in App.js
```jsx
import './App.css';
```
We have imported css file in App.js file. So we can use css in App.js file.

### 7. Wrap the code in ```<> </>``` tag
If you simply write html code in jsx then it will show error. So we have to wrap the code in ```<> </>``` tag.

**Like this** 
```jsx
function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
```
### 8. Use bootstrap in React
Open this website [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template) and copy the script link and paste it in ```index.html``` file(inside public folder)  after ```<body>``` tag.
and copy the css link and paste it in ```index.html``` file(inside public folder)  after ```<head>``` tag.

``` <!-- Option 1: Bootstrap Bundle with Popper -->```
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

```<!-- Bootstrap CSS -->```
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

Now our bootstrap is ready to use in our React App.

### 9. Use bootstrap Component in React and Error Handling

Go to this [website](https://getbootstrap.com/docs/5.0/components/navbar/) and copy any navbar code and paste it in App.js file inside JSX, but you might be getting error. 
```jsx
import logo from './logo.svg';
import './App.css';

function App() {
  let myVariable = 1;
  return (
      <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Link</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li>
                                      <hr className="dropdown-divider">
                                  </li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                          </li>
                      </ul>
                      <form className="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                              <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                  </div>
              </div>
          </nav>
      </>

  );
}

export default App;
```
for fixing this error change the name ```class ``` to ```className``` and ```for``` to ```htmlFor``` in the code and also add ```/``` in the end of the tag like ```<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">``` to ```<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>``` and replace href="#" to href="/" in the code.
node: it'll throw many error so you have to add closing tab manually

- Close those tags which don't have a closing tag.
- Replace the ‘class’ keyword with ‘ClassName’.
- Replace href= “#” with href= “/”
- The code must be in one tag or use a JSX fragment.

```jsx
import logo from './logo.svg';
import './App.css';

function App() {
  let myVariable = 1;
  return (
      <>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/">Link</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li><a className="dropdown-item" href="/">Action</a></li>
                                  <li><a className="dropdown-item" href="/">Another action</a></li>
                                  <li>
                                      <hr className="dropdown-divider"/>
                                  </li>
                                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                          </li>
                      </ul>
                      <form className="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                              <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                  </div>
              </div>
          </nav>
      </>

  );
}

export default App;

```
### 10. App name change 
Open index.html file and change the title of the app  ```React App``` to  ```<title>Todos List | CodeXam</title>```

### 11. Customize your navbar according to your need 

remove ```<li>``` tag or add ```<li>``` tag according to your need to customize your navbar.

### 12. First Functional Based Component - Header.js make and import it in App.js
Inside ```src folder``` create a folder named ```MyComponents``` and inside MyComponents folder create a file named ```Header.js``` and copy the code (```<nav>.....</nav>```) from App.js and paste it in Header.js inside ```return``` and remove the navbar code from App.js and for using the header in App.js import Header from ```./MyComponents/Header```; and add ```<Header/>``` in App.js inside ```return``` tag.

- **Shortcut for creating functional snippet React in vscode is ```rfc``` and in webstorm is ```rsf```**

```App.js```

**Import Component**
```jsx
import Header from "./MyComponents/Header";
````
**Add Component**
```jsx
return (
    <>
        <Header/> {/*add this line for using the header*/}
    </>

);
```

```Header.js```

**Export Default Component**
```jsx
import React from 'react';

function Header(props) {
    return (
        <div></div> //return the navbar code here <nav>.....</nav>
    );
}

export default Header;
```
### 13. Create Another Components using react Arrow Function Component and import it in App.js

Inside MyComponent Folder create a file named ```Footer.js``` and for using the footer in App.js import Footer from ```./MyComponents/Footer```; and add ```<Footer/>``` in App.js inside ```return``` tag.



- **Shortcut for creating arrow function snippet React in VSCode is ```rafc``` and in webstorm is ```rsc```**

```App.js```
**Import Component**

```jsx
import {Footer} from "./MyComponents/Footer";
```
**Add Component**
```jsx
return (
    <>
        <Header/>
        <Footer/> {/*add this line for using the footer*/}
    </>

);
```

```Footer.js```

**Export Arrow Function Default Component**
```jsx
import React from 'react';

export const Footer = () => {
    return (
        <div>
            
        </div>
    );
};

```

Do this same things for creating ```Todos.js``` and ```TodoItem.js``` components.

#### Note: If you don't use export default then you have to use curly braces like this ```imp...{Footer} from "./MyCo.../Fo...";``` while importing the component because it is not default export.

### 14. Props in React

**What is props in React ?**

We use props because we want to pass data from one component to another component. We can pass data from parent component to child component using props. 

- In this case our parent component is App.js and child component is Header.js, Footer.js, Todos.js, TodoItem.js.
- Open your ```Header.js``` and pass props in the function like this ```function Header(props)``` and inside the ```return``` tag add ```props.title``` like this``` <a className="navbar-brand" href="/">{props.title}</a>``` and in App.js add ```<Header title="My Todos List"/>``` and you will see the title in the header.

```Header.js``` - **Child Component**
```jsx
import React from 'react';

function Header(props) {{/*add this line*/}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>{/*add this line*/}
{/*.........*****************Remain code*****************.........*/}
```
```App.js``` - **Parent Component** 
```jsx
function App() {
  let myVariable = 1;
  return (
      <>
          <Header title = "My Todos List"/>{/*add this line*/}

          {/*.........*****************Remain code*****************.........*/}
```

#### note: If you don't want to use props , you want to use title or anything else then replace the ```function Header(props)``` with ```function Header({title})``` and replace the ```<a className="navbar-brand" href="/">{props.title}</a>``` with ```<a className="navbar-brand" href="/">{title}</a>``` and in App.js add ```<Header title="My Todos List"/>``` and you will see the title in the header.


### 15. Using Props Conditional rendering in React - using the ternary operator

- Open your ```App.js``` and inside Header tag you can do something like this
  
```App.js``` - **Parent Component**
```jsx
  return (
      <>
          <Header title = "My Todos List" searchBar = {true}/>
          
          {/*.........*****************Remain code*****************.........*/}
```

- Then go to ```Header.js```  if props.searchBar is true then show the search bar otherwise don't show the search bar.
for this you have to write something like this before search bar code

```Header.js``` - **Child Component**
```jsx
function Header(props) {
    return (
// .........*****************Remain code*****************.........
        
                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : "No Search Bar"}

// .........*****************Remain code*****************.........
```
- **So the syntax is** ```{props.searchBar ? <form className="d-flex">.....</form> : "if false then execute this"}```

- Now if you pass false in App.js like this ```<Header title = "My Todos List" searchBar = {false}/>``` then you will see ```No Search Bar``` in the header 

### 16. PropTypes in React
What is PropTypes in React ?

PorpTypes is a library that helps you to check the type of props that you are passing to the component. If you pass the wrong type of props then it will show you the error in the console.

for example in Header.js if you add under jsx ```Header.propTypes = {title: PropTypes.string,}``` and ```import PropTypes from 'prop-types';``` .Then in App.js if you change ```<Header title = "My Todos List"/>``` to ```<Header title ={45}/>``` then you will see an error in the console like this ```Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`.``` we use PropTypes for checking the type of props.

```Header.js``` - **Child Component**
```jsx
import PropTypes from 'prop-types';
// .........*****************Remain code*****************.........
// .........*****************Remain code*****************.........
export default Header;
// Here
Header.propTypes = {
    title: PropTypes.string,
}
```

```App.js``` - **Parent Component**
```jsx
<Header title = "My Todos List" searchBar = {false}/>
```

### 17. DefaultProps in React
What is DefaultProps in React ?

DefaultProps is a library that helps you to set the default value of props that you are passing to the component. If you don't pass the props then it will show you the default value in the console.

For example in Home.js if I add  ```Header.defaultProps = {title: "Your Title Here",} then If I remove the title in App.js like this ```<Header/>``` then it will show the default value of title in the console like this ```Your Title Here```

```Header.js``` - **Child Component**
```jsx
// .........*****************Remain code*****************.........
// .........*****************Remain code*****************.........
export default Header;
// Here
Header.defaultProps = {
    title: "Your Title Here",
}

```

```App.js``` - **Parent Component**
```jsx
<Header />
```

Even I can do this same things with search bar 

```Header.js``` - **Child Component**
```jsx
// .........*****************Remain code*****************.........
// .........*****************Remain code*****************.........
export default Header;
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true, // I can set the default value of search bar
}
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired, // I can set the type of search bar and it is required or not
}
```

```App.js``` - **Parent Component**
```jsx
<Header />
```
Now you will see the default value of search bar in the console like this ```true``` so search bar will be shown in the header.


**Note:** we use isRequired if I remove ```searchBar: true,``` default value or normal boolean value then it will show an error in the console like this ```Warning: Failed prop type: The prop `searchBar` is marked as required in `Header`, but its value is `undefined`.``` so we use isRequired for checking the type of props.

### 18. Components Setup in React
#### <u> 18.1 Props , Array and Passing Props to Child Component setup</u>
- First go to App.js and create a new array of objects like this

```App.js``` - **Parent Component**
```jsx
function App() {
    let myVariable = 1;
    let todos = [
        {
            sno: 1,//sno is serial number
            title: "Go to the market",// title 
            desc: "You need to go to the market to get this job done" // desc is short for description 
        },
        {
            sno: 2,
            title: "Go to the mall",
            desc: "You need to go to the mall to get this job done"
        },
        {
            sno: 3,
            title: "Go to the shop",
            desc: "You need to go to the shop to get this job done"
        },
    ]
    return (
        <>
            <Header title = "My Todos List" searchBar = {false}/>
            <Todos todos = {todos}/>
            {/*.........*****************Remain code*****************.........*/}
```

- Then we are passing todos array to Todos component in App.js

```App.js``` - **Parent Component**
```jsx
<Todos todos ={todos}/>
```

- In todos.js we are getting the todos array from App.js 

```Todos.js``` - **Child Component**
```jsx
import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => { // Here we are getting the todos array from App.js 
    return (
        <div className="container">
            <h3 >Todos List</h3>
           <TodoItem todo={props.todos[0]}/>  {/*Here we are passing the first object of todos array to TodoItem component*/}

        </div>
    )
}
```

- In TodoItem.js we are getting the todo object from Todos.js

```TodoItem.js``` - **Child Component**
```jsx
export const TodoItem = ({todo}) => {// Here we are getting the todo object from Todos.js
    return (
        <div>
            <h4>{todo.sno}</h4>{/* Here we are getting the sno from todo object */}
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
        </div>
    )
}
        
```

- Now set the delete button in TodoItem.js

```TodoItem.js``` - **Child Component**
```jsx
export const TodoItem = ({todo}) => {
    return (
        <div>
            <h4>{todo.sno}</h4>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}
```

- For setting the todos list in middle of the page we use ```<div className="container">``` in Todos.js

```Todos.js``` - **Child Component**
```jsx
 <div className="container">
            <h3 className="text-center">Todos List</h3> //text-center is a bootstrap class for centering the text

```

- If you want to give some margin to the todos list then you can use ```<div className="container my-3">``` in Todos.js

```Todos.js``` - **Child Component**
```jsx
 <div className="container">
            <h3 className="text-center my-3">Todos List</h3> //my-3 is a bootstrap class for giving margin to the todos list

```

#### <u> 18.2 Using for Loop in React</u>
- Now we are going to use for loop in React for showing the todos list

```Todos.js``` - **Child Component**
```jsx


```




  




