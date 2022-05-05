import React , {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        setText(newText)
    }
    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const[text,setText] = useState("");
    return (
        <>
        <div className= "container">

            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

     <div className="container my-3">
         <h2>Your text summary</h2>
         {/*Call the split() method on the string, passing it a string containing a space as a parameter. The split method will return an array of the string's words, on which you can access the length property to get the number of words in the string.*/}
         <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length } words and {text.length} characters</p>
         <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value != "").length } Minutes is your Average Read Speed</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Nothing to preview!"}</p>
             </div>

    </>
    );
}

