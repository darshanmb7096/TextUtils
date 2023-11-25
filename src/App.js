
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light')
  const [modeText,changeModeText] = useState('Dark Mode')
  const [alert,setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  
    // Set a timeout to clear the alert after 3 seconds
    setTimeout(() => {
      setAlert({
        msg: '',
        type: '',
      });
    }, 3000); // 3 seconds in milliseconds
  };
  

  const EnableDarkMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743'
      changeModeText('Light Mode')
      showAlert("Dark Mode has Enabled ","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      changeModeText('Dark Mode')
      showAlert("Light Mode has Enabled ","success")
    }
  }

  return (
   <>
      <Navbar mode={mode} toggleMode = {EnableDarkMode} modeText={modeText} />
      <Alert Alert={alert}/>
      <div className="container">
       <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
       {/* <About /> */}
      </div>
   </>
  );
}

export default App; 
