import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.title = 'Textutils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'Textutils - Light Mode';
    }
  };

  return (
    <>

    <Router>
      {/* <Navbar title='Textutils' mode={mode}/> */}
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      {/* <div className="container"></div> */}
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/home">
             <TextForm heading="Enter the text to analyze below" mode={mode} />
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch>
    </Router>
      
    </>
  );
}

export default App;
