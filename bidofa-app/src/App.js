import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './components/LandingPage.js';
import './App.css';
import Marketplace from './bidofa_marketplace/src/App.js';
import routes from './config/route.js';

function App() {
  return (
    <>

<         BrowserRouter>
          <div> 
          {routes.map(({ path, component }) => (
             
             
             <Routes>
                <Route  key={'home'}  path="/"  exact Component={Home}>
                  
              
                
              </Route>

              <Route key = {'marketplace'} path="/Marketplace" exact Component= {Marketplace}>
              
                </Route>
            </Routes>
            ))}
            </div>
         </BrowserRouter>


   
    </>
  )
}

export default App;
