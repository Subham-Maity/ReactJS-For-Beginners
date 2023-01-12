import React , {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success");

    }
    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "success");

    }
    const handleOnChange= (event)=>{
        // console.log("on change");
        setText(event.target.value)

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak" , "success");
    }

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Reverse" , "success");
    };

    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        props.showAlert("Remove all symbols" , "success");
    };
    const handleNumExtract =()=>{
        const regex = /[0-9/ /]/g;

        const digits = text.match(regex);
        const res = digits.join('');
        setText(res)
        props.showAlert("Extract all numbers" , "success");
    };
    const capitalize = () => {

        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
        props.showAlert("Capitalize the first letter" , "success");

    }

    const onRemoveDuplicatesClick = (e) => {
        let newText = text.split(' ').filter(function(item,i,allItems){
            return i === allItems.indexOf(item);
        }).join(' ');

        setText(newText)
        props.showAlert("Remove duplicates" , "success");
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }



    const[text,setText] = useState("");
    return (
        <>
        <div className= "container" style={{color: props.mode==='dark'?'white':'#182429'}}>

            <h1 className="mb-4">{props.heading} </h1>
            <div className="mb-3">
                {/*Explanation: The above code changes the background color of the TextBox according to the mode which is being enabled.
                 For example, if dark mode is enabled then the background color of the TextBox will be grey otherwise white.*/}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2b3132':'white', color: props.mode==='dark'?'white':'#182429'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-outline-success mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled = {text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <button disabled = {text.length===0} type="submit" onClick={handleReverse} className="btn btn-warning mx-2 my-2">Reverse</button>
            <button disabled = {text.length===0} type="submit" onClick={handletextExtract} className="btn btn-outline-info mx-2 my-2">Remove all the symbols</button>
            <button disabled = {text.length===0} type="submit" onClick={handleNumExtract} className="btn btn-outline-info mx-2 my-2">Extract all numbers</button>
            <button disabled = {text.length===0} type="submit" onClick={capitalize} className="btn btn-outline-success mx-2 my-2">Capitalize</button>
            <button disabled = {text.length===0} type="submit" onClick={onRemoveDuplicatesClick} className="btn btn-outline-secondary mx-2 my-2">Remove Duplicate</button>
            <button disabled = {text.length===0} type="submit" onClick={handleCopy} className="btn btn-outline-secondary mx-2 my-2">Copy Text</button>
            <button disabled = {text.length===0} type="submit" onClick={handleExtraSpaces} className="btn btn-outline-secondary mx-2 my-2">Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>


        </div>




            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h2>Your text summary</h2>
         {/*Call the split() method on the string, passing it a string containing a space as a parameter. The split method will return an array of the string's words,
          on which you can access the length property to get the number of words in the string.*/}

                {/*We have created the function of Counting words in our Textform.js. The split() method */}
                {/*is used to convert the string into an array. In our case, We are splitting the string */}
                {/*by a space and then counting the length of that array, which comes out to be one.*/}
                {/*Therefore, a blank space is being counted as a word.*/}

                {/*Solution: The quick way of fixing this error is by removing the empty strings from the split array*/}
         <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length } words and {text.length} characters</p>
                {/*If the arrow function returns the true value for an element, */}
                {/*then only it would be allowed to stay in the split array. */}
                {/*The filter() does not execute the function for empty array elements.*/}

         <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !=="").length } Minutes is your Average Read Speed</p>
                <fieldset className="border border-200 p-3"> <h2>Preview</h2>
               <p>{text.length>0?text:"Nothing to preview!"}</p></fieldset>
            </div>

    </>
    );
}

