// import React from 'react'
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");

    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log("You have copied")
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState(" ");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#42743' }}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upper case </button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lower case </button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>




            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2><b> Text summary </b></h2>
                <p>{text.split(" ").length} words and{text.length}  characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2><b>Preview</b></h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
