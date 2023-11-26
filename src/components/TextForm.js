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
    setFont({
      fontFamily:''
    })
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard') )

    // const tempTextarea = document.createElement('textarea');
    // tempTextarea.style.position = 'absolute';
    // tempTextarea.style.left = '-9999px';
    // tempTextarea.style.opacity = '0';
    // tempTextarea.style.fontFamily = font.fontFamily; // Apply the font style to the temporary textarea
    // tempTextarea.value = text; // Set the value of the temporary textarea to the text with applied font
    // document.body.appendChild(tempTextarea);
    // tempTextarea.select();
    // document.execCommand('copy');
    // document.body.removeChild(tempTextarea);
    // alert('Copied to clipboard');
  }

  const RemoveExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

 const [font,setFont] = useState( {
  fontFamily:''
 })
   
 const changeFont = (selectedFont) => {
  switch (selectedFont) {
    case 'Cursive':
      setFont({ fontFamily: 'cursive' });
      break;
    case 'Times New Roman':
      setFont({ fontFamily: 'Times New Roman, serif' });
      break;
    case 'Arial':
      setFont({ fontFamily: 'Arial, Helvetica, sans-serif' });
      break;
    default:
      setFont({ fontFamily: '' });
      break;
  }
};



  
  return (
    <>
    <div className='container' >
     <h1 style={{color: props.mode=== 'light'? 'black': 'white'}} >{props.heading}</h1>
      <div  className="mb-3">
         <textarea className="form-control" id="my Box" rows="8"  style={{fontFamily: font.fontFamily, backgroundColor: props.mode === 'light' ? 'white' : 'rgb(0 29 53)',color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChnage} ></textarea>
       </div>
       <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}  >Convert to Uppercase</button>
       <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}  >Convert to Lowercase</button>
       <button className='btn btn-primary mx-2 my-2' onClick={RemoveExtraSpace}  >Remove Spaces</button>
       <button type="button" className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>
       <div className="dropdown">
         <button className="btn btn-primary dropdown-toggle  mx-2 my-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Change Font</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={() => changeFont('Cursive')}>Cursive</a>
            <a className="dropdown-item" onClick={() => changeFont('Times New Roman')}>Times New Roman </a>
            <a className="dropdown-item" onClick={() => changeFont('Arial')}>Arial</a>
            <a className="dropdown-item" onClick={() => changeFont('')}>Default</a>

          </div>
       </div>
       <button type="button" className="btn btn-secondary mx-2 my-2" onClick={handleReset} >Clear Text</button>
    </div>

    <div className="container my-3">
      <h2 style={{color: props.mode=== 'light'? 'black': 'white'}}>Your text summary: </h2>
      <p style={{color: props.mode=== 'light'? 'black': 'white'}}>{text.split(" ").length} word and {text.length} characters</p>
      <p style={{color: props.mode=== 'light'? 'black': 'white'}}>Above texts can be read in { 0.008 * text.split(" ").length} minutes</p>
      <h2 style={{color: props.mode=== 'light'? 'black': 'white'}}>Preview</h2>
      <p style={{color: props.mode=== 'light'? 'black': 'white',fontFamily:font.fontFamily}}>{text.length>0?text:"Enter any text to Preview"}</p>
    </div>
    </>
)


  }




