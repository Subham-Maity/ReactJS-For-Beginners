# 1.Word Counting Error
We have typed three words in the textbox but still, the word count is showing it as one. This issue occurs as we have forgotten to split the string with a new line. We would like to split it by space and a new line. To do so, Go to textform.js where we have written the code for counting words, and edit it as follows:
```jsx
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
```

Here, We are using the regular expression(regex) instead of space. The \s is the common shorthand in regex for any whitespace character, including newlines and ‘+’ denotes more than one.

Our Word Counting issue has been fixed!

Note: We would remove the unnecessary comments and Console.log().

# 2. About page arrow Invisibility 

In the dark mode, the side arrows in the accordion component of our About Page disappear due to their matching color with the background. We can easily fix this issue by adding the below CSS code to accordion-button::after in index.css.

```css
.accordion-button::after {
    filter: invert(1);
}
```

# 3. Home page Highlighted

Our home section in the navbar is always highlighted, even if we are on the about page. To overcome this issue just remove the active class from Home.


# 4. Copy to Clipboard

We are now using the navigator API to copy the text of the textbox. Hence we could remove the code of the select and deselect text from our application.