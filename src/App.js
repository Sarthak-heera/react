import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import ReactDOM from 'react-dom/client';
import {
    Routes,
    Route
} from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const [Alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark mode has been enabled", "success");
            document.title = "TextUtils - Dark Mode";
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
            document.title = "TextUtils - Light Mode";

        }
    }

    return (
        <>

            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
               
                   
            </Routes>


        </>
    )
}

export default App;