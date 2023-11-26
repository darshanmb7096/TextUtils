
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';


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
  const footerStyle = {
    // Define your styles here
    backgroundColor: 'gray',
    color: 'white',
    
    // ... other CSS properties
};

  return (
    <Scrollbars style={{ width: '100%', height: '100vh', maxWidth: '100vw',Color:mode==='light'?'#212529':'white' }}>
    <div className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
      <Navbar mode={mode} toggleMode={EnableDarkMode} modeText={modeText} />
      <Alert Alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        {/* <About /> */}
      </div>
      <Footer mode={mode} toggleMode={EnableDarkMode} />
    </div>
  </Scrollbars>
  );
}

export default App; 
