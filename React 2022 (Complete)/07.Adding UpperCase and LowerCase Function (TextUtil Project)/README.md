# Editing textform.js:
Earlier, we have created a textbox in textform.js and have rendered it in our application with the help of "app.js". Create a container that will have a summary of our text. Let’s analyze our text by creating some more features:
1. Counting Words and Characters logic in textform.js
   
 Inside the new div tag in Transform.js we would add our code.


```<p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length }``` this one for count words in text
and ```{text.length} characters</p>```this one for character
```jsx
// Textform.js
    <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length } words and {text.length} characters</p>
```
{text.length} counts the length of text, that is the number of characters. Javascript split() is used to split the given string in an array. Here, we have used the split function, {text.split(“ ”).length}, to count the number of words in the given text.

2. Calculating Reading Time logic in textform.js

Now let’s calculate the expected reading time required to read the given set of text in our textbox. For humans, On average to read a single word takes 0.008 minutes, which means if we multiply the number of words by 0.008 minutes. It will show us the time required to read the given text in minutes.

```jsx
// Textform.js
 <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value != "").length } Minutes is your Average Read Speed</p>
```

3. Preview Section of textbox in textform.js

```jsx
// Textform.js
 <h2>Preview</h2>
 <p>{text.length>0?text:"Nothing to preview!"}</p>
```

4. Convert text to lowercase in textform.js

#### Adding Button:
```jsx
// Textform.js
<button className= "btn btn-primary" onClick={handleloClick}> Convert to Lowercase</button>
```
You can change color of button by adding className="btn btn-primary" in button tag.


Follow the same logic as the bootstrap [website](https://getbootstrap.com/docs/4.0/components/buttons/).
<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/07.Adding%20UpperCase%20and%20LowerCase%20Function%20(TextUtil%20Project)/image(ignore)/1.png?raw=true"/>
        </p>

```jsx
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

##### Adding a function:

creating a function named "handleLoClick". It is similar to the function we have created for changing text to uppercase.
```jsx
const handleLoClick = () => {
    console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText("new text")
}
```
On clicking the button our text will change to Lowercase.

<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/07.Adding%20UpperCase%20and%20LowerCase%20Function%20(TextUtil%20Project)/image(ignore)/2.png?raw=true"/>
        </p>


### Extra:
1. Remove Enter text here in textform.js
2. and change navbar to dark mode. (navbar.js)
simple change name to dark 
```jsx
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
```