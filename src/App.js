import { useState } from 'react';
import './App.css';

const App = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  
  const [show, setshow] = useState(false);

  setInterval(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);

  const buttonHandler = () => {
    setshow(!show);
  }
  
  return (
      <div className="container">
        <div className="box1">
          <h3 className="text-center">
            {show ? time : "Click Button to show Current Time"}
          </h3>
        </div>
        <br></br>
        <div className="box2">
          <button
            onClick={buttonHandler}
            className="btn btn-dark click">
            {show ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
  )
}

export default App
