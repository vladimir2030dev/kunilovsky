import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <div className="container">
            <Route path={'/'} exact component={Home} />
          </div>

      </BrowserRouter>
  );
}

export default App;
