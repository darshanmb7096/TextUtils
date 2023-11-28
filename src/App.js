import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Home from './components/Home';
import React, { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Main, Route, Routes, Redirect, Switch } from 'react-router-dom'

function App() {
  // Load mode from localStorage or use 'light' as default
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  const [modeText, changeModeText] = useState(mode === 'light' ? 'Dark Mode' : 'Light Mode');
  const [alert, setAlert] = useState(null);

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

  const EnableDarkMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);

    document.body.style.backgroundColor = newMode === 'light' ? 'white' : '#042743';
    changeModeText(newMode === 'light' ? 'Dark Mode' : 'Light Mode');
    showAlert(`${newMode === 'light' ? 'Light' : 'Dark'} Mode has been enabled.`, 'success');
  }

  useEffect(() => {
    // Set body background color on initial render
    document.body.style.backgroundColor = mode === 'light' ? 'white' : '#042743';
  }, [mode]);

  return (
    <Main>
      <Scrollbars style={{ width: '100%', height: '100vh', maxWidth: '100vw', Color: mode === 'light' ? '#212529' : 'white' }}>
        <div className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
          <Navbar mode={mode} toggleMode={EnableDarkMode} modeText={modeText} />
          <Alert Alert={alert} />
          <div>
            <Switch>
              <Route path='/about'>
                <div className='container'>
                  <About mode={mode} toggleMode={EnableDarkMode} />
                </div>
              </Route>
              <Route path='/TryIt'>
                <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
                <Footer mode={mode} toggleMode={EnableDarkMode} />
              </Route>
              <Route path='/'>
                <Home mode={mode} toggleMode={EnableDarkMode} />
                <Footer mode={mode} toggleMode={EnableDarkMode} />
              </Route>
            </Switch>
          </div>
        </div>
      </Scrollbars>
    </Main>
  );
}

export default App;
