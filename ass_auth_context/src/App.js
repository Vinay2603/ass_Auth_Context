import './App.css';
import { Login } from './components.js/login';
import { Navbar } from './components.js/Navbar';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Login /> 
    </div>
  );
}

export default App;
