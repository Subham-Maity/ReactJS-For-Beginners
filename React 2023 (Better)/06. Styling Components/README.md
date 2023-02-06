
# [**Website View**](https://code-xam.vercel.app/docs/react/react6)




## ⭐ How to use css in ReactJS


1. First, create a CSS file with a name like "app.css" in the same directory as your React component file(s).
2. In the CSS file, write your styles for the components.
3. In your React component file(s), import the CSS file at the top using ```import './app.css'```.
4. In your JSX code, use the ```className``` attribute to apply the styles to your components.
5. The value of `className` should match the class selector in your CSS file.

**Example:**
```css filename="app.css"

.title {
  font-size: 24px;
  color: blue;
}
```
```jsx filename="app.js" /className="title"/

import React from 'react';
import './app.css';

function App() {
  return (
    <div>
    <h1 className="title">Hello World!</h1>
    </div>
    );
}

export default App;
```
In this example, the ``title`` class from the CSS file is applied to the `h1` element in the React component through the ``className`` attribute.


## ⭐ Experiment 1

When you apply a CSS file to a React component, it will only affect that component and its child components. The styles will not affect other components in your application unless you specifically import and apply the CSS file to those components as well. </h2>


1. You can see you have app.css file in the same directory as your React component file(s).
2. In the CSS file, write your styles for the components.
```css filename="app.css"

.header {
    text-align: center;
    background-color: #644ec2;
    color: white;

}

.footer {
    text-align: center;
    background-color: #c59a58;
    color: white;

}
```
3.

- Now inside your ``src`` folder, you can create a new file named ``footer.js`` and write the following code.
```jsx filename="footer.js"

const Footer = () => {
return (
    <div>
      <h1 className="footer">Footer</h1>
    </div>
    )
}

export default Footer;
```
- Now inside your ``src`` folder, you can create a new file named ``header.js`` and write the following code.

```jsx filename="header.js"

import Footer from "./footer";

const header = ()=>{
return(
<div>
  <h1>Header</h1>
    <Footer/>
</div>
    )
}
export default header;
```

4. Now inside your ``app.js`` file, just import the ``header.js`` file and inside the className just use the ``header`` class from the CSS file is applied to the ``h1`` element in the React component through the ``className`` attribute.

```jsx filename="app.js" /<div className="header">/

import logo from './logo.svg';
import './App.css';
import Header from './component/header';
function App() {
 return (
    <>
    <div className="header">
    <header/></div>
    </>
    );
}

export default App;
```

5. Now you can notice that the ``header`` class from the CSS file is applied to the ``h1`` element in the React component through the ``className`` attribute also the ``footer`` class from the CSS file is applied to the footer component through the ``className`` attribute.

So the css file is applied to the React component and its child components here parent component is ``app.js`` and child component is ``header.js`` and ``footer.js``.


#### ⚡ [Playground](https://stackblitz.com/edit/react-ts-unwzwa?devToolsHeight=33&file=App.tsx)




## ⭐ Experiment 2


1. Now just make a new file named ``header.css`` inside the ``src`` > ``component`` folder and write the following code.

```css filename="header.css"

.header {
    background-color: bisque;
    color: #644ec2;
}
```
2. Now inside your ``header.js`` file, just import the ``header.css`` file and inside the className just use the ``header`` class from the CSS file is applied to the ``h1`` element in the React component through the ``className`` attribute.

```jsx filename="header.js" /className="header"/

import Footer from "./Footer";
import "./Header.css"

 const Header = ()=>{
    return(
    <div>
        <h1 className="header">Header</h1>
        <Footer/>
    </div>
    )
}

export default Header;
```

3. Now you can notice that the ``header`` class from the CSS file is applied to the ``h1`` element in the React component through the ``className`` attribute.

So this is how you can apply css styles specific to a component in the same file as the component, to make your code more modular and easier to maintain.

#### ⚡ [Playground](https://stackblitz.com/edit/react-ts-4vb8wt?devToolsHeight=33&file=src/components/Header.jsx)

    

You can also use id instead of class in the CSS file.

```css filename="header.css"
        .header {
        background-color: bisque;
        color: #644ec2;

    }

        #xam{
        color: #ff038d;
    }
```
```jsx filename="header.js" /<p id ="xam">/
    import Footer from "./Footer";
   import "./Header.css"

    const Header = ()=>{
    return(
      <div>
          <h1 className="header">Header</h1>
          <p id ="xam">hey what's up </p>
         <Footer/>
      </div>
      )
    }

        export default Header;
```

## ⭐ Experiment 2


 Let's try to use inline CSS 

Simply just add the ``style`` attribute to the element you want to add CSS to, and set the value to an object with a camelCased version of each CSS property.

```jsx filename="header.js" /style={{backgroundColor:"#915454" , color:"#6592a3"}}/
import Footer from "./Footer";
import "./Header.css"

const Header = ()=>{
    return(
    <div>
      <h1 className="header">Header</h1>
      <p id ="xam">hey what's up </p>
      <p style={{backgroundColor:"#915454" , color:"#6592a3"}}>My name is xam</p>
    <Footer/>
   </div>
  )
}

export default Header;
```


#### ⚡ [Playground](https://stackblitz.com/edit/react-ts-xd4tk9?devToolsHeight=33&file=src/components/Header.jsx)

