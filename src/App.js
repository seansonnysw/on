import React from 'react';
import Home from './components/Home';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div>
      {/* <h1>Wedding Invitation App</h1> */}
      <ToastContainer />
      <Home />
    </div>
  );
};

export default App;