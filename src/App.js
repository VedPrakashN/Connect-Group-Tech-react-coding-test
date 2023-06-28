import React from  'react'

import MyRouter from './router/index.js'
import Navbar from './components/Navbar.js';

function App() {
  return (

    <div>
        <Navbar />

        <div className="container">
          <MyRouter />
        </div>
    </div>

  );
}

export default App;
