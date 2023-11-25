import React, { useState } from 'react'

export default function TextForm(props) {


  const [text, setText] = useState("")

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
   if(text.length>0){
    props.showAlert("Text has been converted to Uppercase ", "success");
   }else{
    props.showAlert("Please enter text ","warning");
   }

  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length>0){
      props.showAlert("Text has been converted to Lowercase ", "success");
     }else{
      props.showAlert("Please enter text ","warning");
     }
  }


  const handleOnChnage = (event) => {
    setText(event.target.value)

  }

  const handleReset = () => {
    setText("");
    setFont({
      fontFamily: ''
    })
  }

  const handleCopy = () => {
    if(text.length>0){
      navigator.clipboard.writeText(text).then(() => props.showAlert('Copied to clipboard ', 'success'))
     }else{
      props.showAlert("Please enter text ","warning");
     }


  }

  const RemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.length>0){
      props.showAlert("Unwanted Space has been removed ", "success")
     }else{
      props.showAlert("Please enter text ","warning");
     }
  }

  const [font, setFont] = useState({
    fontFamily: ''
  })

  const changeFont = (selectedFont) => {
    if(text.length<1){
      props.showAlert("Please Select a Font","warning");
    }else{
      switch (selectedFont) {
        case 'Cursive':
          setFont({ fontFamily: 'cursive' });
          props.showAlert(`Font has changed to ${selectedFont}`, "success");
          break;
        case 'Times New Roman':
          setFont({ fontFamily: 'Times New Roman, serif' });
          props.showAlert(`Font has changed to ${selectedFont}`, "success");
          break;
        case 'Arial':
          setFont({ fontFamily: 'Arial, Helvetica, sans-serif' });
          props.showAlert(`Font has changed to ${selectedFont}`, "success");
          break;
        default:
          setFont({ fontFamily: '' });
          props.showAlert(`Font has changed to Default`, "success");
          break;
      }
    }
  };




  return (
    <>
      <div className='container' >
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }} >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="my Box" rows="8" style={{ fontFamily: font.fontFamily, backgroundColor: props.mode === 'light' ? 'white' : 'rgb(0 29 53)', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChnage} ></textarea>
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
        <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your text summary: </h2>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.split(" ").length} word and {text.length} characters</p>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Above texts can be read in {0.008 * text.split(" ").length} minutes</p>
        <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h2>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white', fontFamily: font.fontFamily }}>{text.length > 0 ? text : "Enter any text to Preview"}</p>
      </div>
    </>
  )


}




