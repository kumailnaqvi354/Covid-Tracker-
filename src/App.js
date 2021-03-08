import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import InfoPanel from './Components/InfoPanel.js'
import FootNav from './Components/FootNav.js'

function App() {

  const screenConfig = useState(0);


  return (
    <div>
      <NavBar/>
      <InfoPanel  currentScreen={screenConfig[0]} />
      <FootNav  screenConfig = {screenConfig}  />
    </div>
  );
}

export default App;
