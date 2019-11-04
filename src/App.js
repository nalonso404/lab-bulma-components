import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <Signup/>
    </div>
  );
}

export default App;
