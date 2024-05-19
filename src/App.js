import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DrawingCanvas from './pages/DrawingCanvas';
import Navbar from './components/Navbar';

// Function App
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/canvas" component={DrawingCanvas} />
        </Switch>
      </div>
    </Router>
  );
}

// Export App
export default App;