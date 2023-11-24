
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light')

  const [modeText,changeModeText] = useState('Dark Mode')

  const EnableDarkMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#686868'
      changeModeText('Light Mode')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      changeModeText('Dark Mode')
    }
  }

  return (
   <>
      <Navbar mode={mode} toggleMode = {EnableDarkMode} modeText={modeText} />
      <div className="container">
       <TextForm heading="Enter the text to analyze" mode={mode}/>
       {/* <About /> */}
      </div>
   </>
  );
}

export default App; 
