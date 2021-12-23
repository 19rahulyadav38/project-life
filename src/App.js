import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Page from "./components/Page"

function App() {
  return (
    <div className="App">
      
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="dashboard" element={<Page/>} />
      </Routes>
    </div>
  );
}

export default App;
