import React from 'react';
import FormCreate from "./Components/Forms/FormCreate";
import ReactDOM from 'react-dom';
import Navigation from './Components/Header/navigation'
import '../src/Assets/App.css'


function App() {
  return (
    <div className="App">
     <Navigation />
     <FormCreate />
    </div>
  );
}

export default App;
