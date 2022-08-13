import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here")
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
        // console.log("UpperCAse Was Clicked")
    }
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleCapitalizeClick=()=>{
        let lower=text.toLowerCase();
        let words=lower.split(" ");
         for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        
        let newSentence = words.join(" ");
        setText(newSentence)
        props.showAlert("Converted to capitalized form", "success")
    }

    const handleClearClick=()=>{
        let newtext=''
        setText(newtext)
        props.showAlert("Text box has been cleared", "warning")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'? '#495057':'white', color: props.mode==='dark'? 'white':'black', fontFamily:'cursive'}} value={text} rows="8" onChange={handleOnChange} ></textarea>
            </div>
            <button className='btn btn-success' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLwClick}>Convert to Lowercase</button>
            <button className='btn btn-warning mx-2' onClick={handleCapitalizeClick}>Capitalize</button>
            <button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black', fontFamily:'cursive'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    ) 
}
