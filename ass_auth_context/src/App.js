import './App.css';
import { Login } from './components.js/Login';
import { Navbar } from './components.js/Navbar';
import { Home } from './components.js/Home';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
         <Navbar />
         <Routes>
             <Route path="/" element={ <Home />}   ></Route>
             <Route path="/Login" element={ <Login />}   ></Route>
             <Route path="*"element={<div>404 page not found</div>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
