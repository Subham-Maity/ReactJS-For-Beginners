# [**Website View**](https://code-xam.vercel.app/docs/react/react7)




<PhotoView   src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202022%20(Complete)/05.Creating%20Navbar%20using%20Props%20and%20PropTypes%20(TextUtil%20Project)/longSubham.png?raw=true" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202022%20(Complete)/05.Creating%20Navbar%20using%20Props%20and%20PropTypes%20(TextUtil%20Project)/longSubham.png?raw=true" alt="example" />
                </PhotoView>
            </PhotoProvider>


## ⭐ What is Props ?




<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
            src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202023%20(Better)/07.%20Props%20&%20Prop-types/img/1.png?raw=true"
   />
</p>




Props are a way to pass data from a parent component to a child component in React. It's like giving information or values to the child component so that it can display or use them. Think of props as variables that hold some data, and you can pass those variables to another component just like you would pass variables to a function.


Here are some key points to follow when using props in React:

- Always pass data from parent to child: The parent component should be the one responsible for passing data to the child component using props.

- Make props read-only: Props should be treated as read-only values in the child component. The child should not modify the props that are passed to it.

- Use default props: You can specify default props for a component in case no props are passed to it. This way, the component will have some default values to display or work with.

- Use prop types: You can use prop types to define the expected data type of a prop. This helps to catch errors during development and makes your code easier to understand.

- Avoid using props for complex logic: Props are meant to be used for passing simple data, not complex logic. If you need to perform some complex operations, it's best to use state instead.
</h11>
</div>


## ⭐ Syntax




```jsx /(props)/
import React from "react";

function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function ParentComponent() {
  return <ChildComponent name="John Doe" />;
}
```
In this example, the ParentComponent is passing a prop name with the value "John Doe" to the ChildComponent. The ChildComponent can access this prop using props.name in its JSX.


It's also worth noting that in the ChildComponent you can destructure the props to make it easier to access individual props:

```jsx /({ name })/
function ChildComponent({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```



- Also you can send a props multiple times to a component.


```
├── App.js
├── src
│   ├── components
│   │   ├── Student.js
│   │   ├── Comp.js
```

```jsx filename="Student.js"

import Comp from "./Comp"

const Student = (props) => {
  return (
    <>
    <h1> {props.name} </h1>
    <h2> {props.age} </h2>
    <Comp name={props.name}/>
    </>
  )
}


export default Student
```

```jsx filename="Comp.js"

import React from 'react'

const Comp = (props) => {
  return (
    <>
    <h1>{props.name}</h1>
    </>
  )
}

export default Comp;
```

```jsx filename="App.js"

import './App.css';
import Comp from './components/Comp';
import  Student  from './components/Student';

function App() {
  return (
    <div className="App">
    <Student
    name="John"
    age={20} />
    <Comp/>
    </div>

  );
}

export default App;
```



## ⭐ Props Types



Prop types are a way to specify the data type of the props that a component expects to receive. They help to catch errors during development by ensuring that the correct type of data is being passed to the component.

Think of prop types as a way to validate the data that is being passed to a component. If the data that is passed doesn't match the specified prop type, a warning will be displayed in the console to let you know that there's a problem.





## ⭐ Syntax


1. In the terminal type the following command to install prop-types:

```jsx
npm install prop-types
```

2. Import the prop-types library in the component that you want to use it in:

```jsx
import PropTypes from "prop-types";
```

3. Add the prop types to the component:

```jsx
ComponentName.propTypes = {
  propName: PropTypes.dataType
};
```

4. Add the default props to the component:

```jsx
ComponentName.defaultProps = {
  propName: defaultValue
};
```


</h11>
</div>

## ⭐ Experiment Props Types


```
├── App.js
├── src
│   ├── components
│   │   ├── Student.js
│   │   ├── Comp.js
```
### ▶️ Props Types
```jsx filename="Student.js"
import Comp from "./Comp"
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <>
    <h1> {props.name} </h1>
    <h2> {props.age} </h2>
    <Comp name={props.name}/>
    </>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}


export default Student
```

- If you change the data type string to number in the Student.js file then you will get an error in the console.

```bash filename="bash"

index.js:75
Warning: Failed prop type: Invalid prop `name` of type `string` supplied to `Student`, expected `number`.
at Student (http://localhost:3001/main.70cb7e2efd57e082bcd4.hot-update.js:29:29)
at div
at App
```
This means that the data type of the prop name is not a number.

### ▶️ Default Props

```jsx filename="Student.js"
import Comp from "./Comp"
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <>
    <h1> {props.name} </h1>
    <h2> {props.age} </h2>
    <Comp name={props.name}/>
    </>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

Student.defaultProps = {
  name: "John",
  age: 20
}

```
- We can define default values to props using the defaultProps property. defaultProps is used to ensure that props will have a value if it was not specified by the parent component.
- Example: When you visit a website and fill out a form you will notice that already some values are filled in. This is because the website has defined default values for the props.

### ▶️ isRequired

- isRequired is used to ensure that a prop is passed to a component. If the prop is not passed, a warning will be displayed in the console.

```jsx filename="Student.js"
import Comp from "./Comp"
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <>
    <h1> {props.name} </h1>
    <h2> {props.age} </h2>
    <Comp name={props.name}/>
    </>
  )
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

Student.defaultProps = {
  name: "John",
  age: 20
}

```

- If you remove the props name and age from the App.js file then you will get an error in the console.

```bash filename="bash"
index.js:75

Warning: Failed prop type: The prop `name` is marked as required in `Student`, but its value is `undefined`.
at Student (http://localhost:3001/main.70cb7e2efd57e082bcd4.hot-update.js:29:29)
at div
at App
```
