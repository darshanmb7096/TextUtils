import React, { useState } from 'react'

export default function TextForm(props) {
   

  const [text,setText] = useState("")

  const handleUpClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
 }
  

  const handleOnChnage = (event)=>{
        setText(event.target.value)
  }
  
  const handleReset = ()=>{
    setText("");
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard') )
  }



  
  return (
    <>
    <div className='container'>
     <h1>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" id="my Box" rows="8" value={text} onChange={handleOnChnage} ></textarea>
       </div>
       <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}  >Convert to Uppercase</button>
       <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}  >Convert to Lowercase</button>
       <button type="button" className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>
       <div className="dropdown">
         <button className="btn btn-primary dropdown-toggle  mx-2 my-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Change Font</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">Font 1</a>
              <a className="dropdown-item" href="/">Font 2</a>
              <a className="dropdown-item" href="/">Font 3</a>
            </div>
       </div>
       <button type="button" className="btn btn-secondary mx-2 my-2" onClick={handleReset} >Clear Text</button>
    </div>

    <div className="container my-3">
      <h2>Your text summary: </h2>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>Above texts can be read in { 0.008 * text.split(" ").length} minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
)


  }




