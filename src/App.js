import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About  from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title='Word Counter-DarkMode'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title='Word Counter-LightMode'
    }
  };
  return (
    <>
    <Router>
<Navbar title="Word Counter" aboutText="About us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
    <Route exact path="/about" element={<About mode={mode}/>}/>
    <Route exact path="/" element={ <Textform showAlert={showAlert} heading="Try - Word counter, Character counter, Remove extra spaces" mode={mode} buttonname="convertToUpperCase" buttonname2="convertToLowerCase" buttonname3="clear" />} />
  </Routes>
  {/* <Textform showAlert={showAlert} heading="Enter text here" mode={mode} buttonname="convertToUpperCase" buttonname2="convertToLowerCase" buttonname3="clear" /> */}
</div>
</Router>
</>
  )
}

export default App;