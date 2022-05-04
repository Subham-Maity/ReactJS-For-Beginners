# Creating TextBox:
1. We are creating a new component named Textform.js in our Components folder. By using ‘rfc’ snippet you can generate a function-based component in "textform.js". Now inside this function, we will render our desired textbox. For example, we are using the textbox from [Bootstrap](https://getbootstrap.com/docs/5.1/forms/form-control/).


**note:**
While copying anything from Bootstrap, Make sure to do the following changes:
- Close those tags which don't have a closing tag.
- Replace the ‘class’ keyword with ‘className’.
- The code must be in one tag or use a JSX fragment.

2. We will place the ```<TextForm/>``` (in App.js) in a div tag like this ```<div className="container"><TextForm/></div>``` for placing it in middle area 

3. Figure1.1: Our Textbox in textform.js

<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/06.State%20&%20Handling%20Events%20in%20React/Images(ignore)/Img1.png?raw=true"/>
        </p>

4. We would also like to attach some buttons in our app which will fire an event on clicking. 

In textform.js:

**Adding Buttons:** Creating a ‘Convert to Uppercase button’. Adding the following code in textform.js
```jsx
// TextForm.js
<button className="btn btn-primary">Convert to Uppercase</button>
```
5. In app.js: We will be importing textform.js in app.js and return it inside our app by using a function-based component.
   
Figure1.2: Importing and Using Textform
<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/06.State%20&%20Handling%20Events%20in%20React/Images(ignore)/Img2.png?raw=true"/>
        </p>


Here, we have rendered the textform in our application and have successfully passed a heading in it, using props.

Our app is looking something like this,

<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/06.State%20&%20Handling%20Events%20in%20React/Images(ignore)/Img3.png?raw=true"/>
        </p>

*********************
*********************

# Understanding State:
**State:** A state depicts the local information of a Component. For example: If we write something in our text box it will be the state of our object for that specific point in time. The state is the changeable variable of our app. Whenever the state object changes, the component re-renders itself.
### [Official Site](https://reactjs.org/docs/hooks-intro.html)
### useState
It is the type of hook in react which allows us to use state variables in the function-based components.
6. Steps to use state are: Firstly, import the state to your React app by using the below command in App.js.
```jsx
// App.js
import React, { useState } from 'react';
```
7. To use state, firstly enter the following code inside your function-based component.

```jsx
const [count, setCount] = useState(0);
```
The count is the state variable, which contains the current state value. In our case it is text. So, we will replace count with text.
````jsx
// TextForm.js
const [text, setText] = useState('Enter Text here2');
````
8. Here, The value of our text is ‘Enter text here2’. Let's pass this value in our TextBox and make sure to use the ‘Onchange’ event to enable text entry in your textbox. To do so change the code of your text area to:
```jsx
// TextForm.js
<textarea className='form-Control' value={text} Onchange={handleOnchange} id='mybox' rows= '8'></textarea>
```
### Result
Figure1.4: Used State to enter text
<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/06.State%20&%20Handling%20Events%20in%20React/Images(ignore)/Img4.jpg?raw=true"/>
        </p>

9. Changing Values using SetText:
Now, To change the value in the TextBox, we can use the set text function: 
```jsx
// TextForm.js
setText("Your Text here")
```
**Remember you cannot change the value of the variable in React like text = “New Text”;**

10. **Button:**

Now let’s make our button functional by assigning a function to it. We are creating a function named handleUpClick, which on being clicked will change the text of the textbox to “You have clicked on handleUpClick”.
11. **Our function:**
```jsx
// TextForm.js
const handleUpClick = () => {
    console.log("Uppercase was clicked");
    SetText("You have clicked on handleUpClick")
}
```
**Result**
Figure1.5: Displaying the result
<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/06.State%20&%20Handling%20Events%20in%20React/Images(ignore)/Img5.jpg?raw=true"/>
        </p>
You will notice that you cannot add more text in the textbox. This is due to the reason as we didn’t assign a function to the ‘Onchange’ event.

12. Creating new function handleOnChange:  

```jsx
// TextForm.js
const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
}
```
**Result:** After using the above function you will find out that you are able to add more text to your textbox.

13. Changing the text to Uppercase:

Now, we want that on clicking the button it changes the existing text value of the textbox to uppercase. So let’s make changes to our existing handleUpClick function:

```jsx
// TextForm.js
const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText("new text")
}
```
Result: After this, you will be able to enter text in your document and by pressing the ‘Convert to uppercase’ you will be able to convert your text in uppercase.

# Entire Code 
```jsx
// TextForm.js
import React , {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const[text,setText] = useState("Enter text here");
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary"onClick={handleUpClick}>Convert to Uppercase</button>

        </div>
    );
}


```