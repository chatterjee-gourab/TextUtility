import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg: message,
    type: type
    })
    setTimeout(()=>{
        setAlert(null)
    },1500)

  }
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= '#061d34'
    showAlert("Dark Mode has been enabled", "success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white'
    showAlert("Light Mode has been enabled", "success")
  }

  }
  return (
 <>
 {/* <BrowserRouter> */}
<Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading='Enter The Text Below To Convert' mode={mode}/>
  {/* <Routes>
    <Route path='/' element={<TextForm showAlert={showAlert} heading='Enter The Text Below To Convert' mode={mode}/>}/>
    <Route path='/about' element={<About/>}/>
</Routes> */}
</div>
{/* </BrowserRouter> */}
 </>
  );
}

export default App;