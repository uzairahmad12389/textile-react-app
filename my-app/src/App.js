import Alert from   './component/Alert';
import Textform from './component/Textform';
import About from './component/abou';
import Navbar from './component/navbar';
// import Abou from'./component/abou';
import { useState} from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor=" black";
    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  };
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
    
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };
   
  return (
    <>
        <Router>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      {alertMessage && <Alert message={alertMessage} />}
      <Switch>
          <Route path="/about">
            <About mode={mode} toggleMode={toggleMode} />
          </Route>
        
          <Route path="/">
          <Textform
          title="Enter your text" mode={mode} toggleMode={toggleMode}
          showAlert={showAlert}/>
          </Route>
        </Switch>
        </Router>
      
    </>
  );
  
}

export default App;
