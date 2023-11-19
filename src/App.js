import './App.css';
import { useState } from 'react';
// import axios from 'axios';

function App() {
  const [file, setFile] = useState();
  // const [prediction, setPrediction] = useState();
    function handleFileSelect(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function handleFileUpload(){
      /* post request via axios? */
    }

  return (
    <div className="App">
      <div className="App-container">
        <p>ECS 171 - Group 20 : Fungal Classification</p>
        <input type="file" accept=".gif,.jpg,.jpeg,.png"
          onChange = {handleFileSelect}
        />
        <img className="App-img" style={ file ? null : {display: "none"}} src={file}/> 
        <button style={ file ? null : {display: "none"}} onClick={handleFileUpload}>Classify Image</button> 
      </div>
    </div>
  );
}

export default App;
