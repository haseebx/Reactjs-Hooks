import React, { useState } from 'react';
import Navbar from './navbar';
import TextForm from './Textform';
import Counter from './counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };
  return (
    <>
      <Router>
        <Navbar Mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Switch>
            <Route path="/counter">
              <Counter ins="Increment" cls="Clear" dec="Decrement" />
            </Route>
            <Route path="/">
              <TextForm headding="Enter Text for Analyze" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
