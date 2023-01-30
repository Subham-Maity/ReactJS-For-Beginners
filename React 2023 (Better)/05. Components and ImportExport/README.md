
# [**Website View**](https://code-xam.vercel.app/docs/react/react5)



## ⭐ What is component ?



<p align="center">
        <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
             src="https://media.giphy.com/media/l46CuI2SXrn9VpMuk/giphy.gif"
             width="450"/>
    </p>
    In a React app, a component is a piece of code that represents a part of the user interface. It can be reused throughout the app and can receive data (props) and handle events (state).

For example, in an e-commerce website like Flipkart or Amazon, a component could represent a product card that displays information about a product, such as its name, price, and image. This product card component could be used throughout the website, wherever a product needs to be displayed.

Another example could be a search bar component, it could be reused on the header of the website and this component only handle the search functionality, it could be called and use in other places of the website where search functionality required.

In short, React components are like building blocks that can be used to construct the user interface of a React app. They make the code more reusable, modular, and easy to maintain.


A component is a piece of code that creates a specific part of a website or app, they can be reused and can handle actions and data.


Don't worry if you don't understand everything, we will learn more about components in the next section. Just continue reading and you will get it.



## ⭐ How to create a component ?




1. First open your project in your code editor.
    
- How to create a react app ? Click [here](./react2) to know more.

1. Open the "src" folder in your React project. The "src" folder is typically where the majority of the application code lives and is a convention used in React projects.

2. Create a new folder named "components" inside the "src" folder.(this is also a convention, but you can choose a different name if you prefer).

      
- It's a good practice to keep all the components in one folder.
- It's also a good practice to use PascalCase for the components name.
- You can use .js extension instead of .jsx if you want to use javascript syntax instead of JSX.
        

4. Inside the "components" folder, create a new file with a descriptive name for your component, such as "MyComponent.jsx".

5. Now, let's create a simple component. Open the "MyComponent.jsx" file.

here is the example of a simple component inside the src/components/MyComponent.jsx file.

```
        src
        └───components
            └───MyComponent.jsx
```





## ⭐ Understand with some examples


If you don't understand how to create function in javascript, you can check this [link](../js/js18) to learn more.


However, for example I'm going to create arrow function component, you can also create a normal function component.

Try to create a component named "``MyComponent.jsx``" inside the "src/components" folder and then write a simple function inside it and import it in the ```App.js``` file and use it.
  <h2 className="text-red-900 dark:text-red-300 text-4xl font-bold mt-4 mb-4"> Experiment 1</h2>

1. Inside your MyComponent.jsx file, write the following code:

```jsx filename="MyComponent.jsx"
        const Function1 = () => {
            return (
                <div>
                    <h1>Function 1</h1>
                </div>
            )
        }
```
- Here, we created a function named "Function1" and we are returning a div element with a h1 tag inside it.
- We are exporting this function so that we can use it in other files.

```jsx filename="MyComponent.jsx"
        export default Function1
```
- here default means that we are exporting the default function from this file.

We will explore more about export and import don't worry.

2. Now, let's use this component in our App.js file.

  
We already wrote the code for the App.js file in the previous section, so you can skip this step.
Click [here](/docs/react/react4#-experiment) to know more.


- First, import the component in the App.js file.

```jsx filename="App.js"
import Function1 from "./components/MyComponent";
```

- Now, we can use this component in our App.js file.

```jsx filename="App.js"
<Function1 />
```

- Here, we are using the component by calling it's name.

```jsx filename="App.js" /<Function1/>/
import Function1 from "./components/MyComponent";


  let name = "Subham"

  function App() {
        return
        <>
        <div className="container">
           <Function1/>
        <h1>Hello {name}</h1>
        </div>
        </>
        );
    }

export default App;
```

- export - we need to export the component so that we can use it in other files.


- Instead of using import Function1 from "./components/MyComponent"; you can also use import * as MyComponent from "./components/MyComponent";



  <h2 className="text-red-900 dark:text-red-300 text-4xl font-bold mt-4 mb-4"> Experiment 2</h2>

 <h2 className="text-blue-900 dark:text-blue-300 text-1xl font-bold mt-4 mb-4">What if we just change the export name from "Function1" to "ChangeName" and then import it in the App.js file.</h2>

- First, change the export name from "Function1" to "ChangeName" in the MyComponent.jsx file.

 ```jsx filename="MyComponent.jsx"
export default ChangeName
```

- Now, import the component in the App.js file.

```jsx filename="App.js"
import ChangeName from "./components/MyComponent";
```

- Now, we can use this component in our App.js file.

```jsx filename="App.js"
<ChangeName />
```
- It will work fine, but it's not a good practice to change the export name because it will be difficult to understand the code

<h2 className="text-red-900 dark:text-red-300 text-4xl font-bold mt-4 mb-4"> Experiment 3</h2>

<h2 className="text-blue-900 dark:text-blue-300 text-1xl font-bold mt-4 mb-4">What if we create multiple functions in the MyComponent.jsx file and then import it in the App.js file.</h2>

- First, create multiple functions in the MyComponent.jsx file.

```jsx filename="MyComponent.jsx"
        const Function1 = () => {
            return (
                <div>
                    <h1>Function 1</h1>
                </div>
            )
        }

        const Function2 = () => {
            return (
                <div>
                    <h1>Function 2</h1>
                </div>
            )
        }

        const Function3 = () => {
            return (
                <div>
                    <h1>Function 3</h1>
                </div>
            )
        }
```
- Here, we created three functions named "Function1", "Function2" and "Function3" and we are returning a div element with a h1 tag inside it.
- We are exporting these functions so that we can use it in other files.

```jsx filename="MyComponent.jsx"
export {Function1, Function2, Function3}
```
- here we are exporting multiple functions from this file.
- We use curly braces to export multiple functions because we are exporting multiple functions as an object.

- Now, import the component in the App.js file.

```jsx filename="App.js"

import {Function1, Function2, Function3} from "./components/MyComponent";
 ```
- Now, we can use these components in our App.js file.

```jsx filename="App.js"
        <Function1 />
        <Function2 />
        <Function3 />
```
- Here, we are using the components by calling it's name.


- Even you can import it like this ``import Function1, {Function2, Function3} from "./components/MyComponent";``

but you have to export it like this
```jsx
export default Function1
export {Function2, Function3}
```

Why our first letter is always capital in the component name?

 Because React components are always capitalized. This is a convention that React follows. If you don't capitalize the first letter of your component, React will treat it as a regular HTML tag.




wrapping JSX elements in a parent element is required for proper transpilation and to maintain clear and organized code structure. And for multiple JSX element, it should be wrapped in ```<React.Fragment>``` or <> </> to keep the HTML clean.


**Reason**: The reason for this is that JSX is transpiled into JavaScript, and JavaScript requires that all statements return a single expression. If multiple elements are not wrapped in a parent element, they will not be considered a single expression and will cause a syntax error. Additionally, having a parent element helps to keep the structure of the code clear and organized.

    It's also important to note that when you return multiple JSX element, it should be wrapped in a ```<React.Fragment>```or ```<> </> ```which is a special type of element that doesn't add any additional markup to the rendered HTML. This allows you to group elements together without adding unnecessary extra nodes to the DOM.




You can use .js extension instead of .jsx extension for your component file.



## ⭐ Relative Path import



Explaining Relative Path Import


However, instead of relative paths, you can use module paths.

In a file path, the "." (dot) refers to the current directory, and the ".." (dot dot) refers to the parent directory. A single forward slash "/" is used as a separator between directories.

For example,
- in the import statement "import xyz from './abc'", the "./" at the beginning of the path tells the interpreter to look for the "abc" file in the current directory.

- If the path started with "../", the interpreter would look for the "abc" file in the parent directory of the current directory.

- Multiple "../" at the beginning of the path tells the interpreter to look for the "abc" file in the parent directory of the parent directory of the current directory and so on.

- When we use "/./" it's like saying look into the current directory again, as it's redundant.

- When we use "/././" it's like saying look into the current directory again and again, which is also redundant.

Here is a diagram that represents the structure:
```
root/
  |- folder1/
  |    |- fileA.js
  |    |- fileB.js
  |- folder2/
  |    |- fileC.js
  |    |- fileD.js
  |- index.js
```
- "./" refers to the current directory
       - "./fileA.js" refers to the file "fileA.js" in the current directory "folder2"
    **********
- "../" refers to the parent directory
         - "../fileA.js" refers to the file "fileA.js" in the parent directory "folder1"
    **********
- "../../" refers to the parent of the parent directory
            - "../../fileA.js" refers to the file "fileA.js" in the parent of the parent directory "root"
    **********
- "/./" is redundant as it refers to the current directory
           - "/./fileA.js" refers to the file "fileA.js" in the current directory "folder2" which is redundant
    **********

- "/././" is also redundant as it refers to the current directory
                - "/././fileA.js" refers to the file "fileA.js" in the current directory "folder2" which is also redundant
    **********

It is worth noting that, relative path is also affected by the file location where you are running the file. If you run the file from different location the relative path may change.

It's important to use the appropriate relative path to ensure that the interpreter is able to locate the file you are trying to import.



