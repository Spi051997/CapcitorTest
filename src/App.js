  import logo from './logo.svg';
  import './App.css';
  import { Knob } from 'primereact/knob';
  import React, { useState } from "react";
  
    
  function App() {
    const [value, setValue] = useState(0);
    return (
      <div className="App">
       
              <div>{value}</div>

        <Knob value={value} onChange={(e) => setValue(e.value)} min={-10} max={50} />

      

      </div>
    );
  }

  export default App;
