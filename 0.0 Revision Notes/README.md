# Written By CodeXam
List of Revision
- [**We Need This**](#we-need-this)
- [**1. Create Our React App**](#1-create-our-react-app)
- [**2. Start Our React App**](#2-start-our-react-app)
- [**3. You can see the result in browser**](#3-you-can-see-the-result-in-browser)
- [**4. In the src folder we have App.js file (JSX)**](#4-in-the-src-folder-we-have-appjs-file-jsx)
- [**5. Components in React**](#5-components-in-react)
- [**6. Css in App.js**](#6-css-in-appjs)
- [**7. Wrap the code in <> </> tag**](#7-wrap-the-code-in--tag)
- [**8. Use bootstrap in React**](#8-use-bootstrap-in-react)
- [**9. Use bootstrap Component in React and Error Handling**](#9-use-bootstrap-component-in-react-and-error-handling)
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

