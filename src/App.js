import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FrontPage from './pages/FrontPage';
import BackPage from './pages/BackPage';
import FullPage from './pages/FullPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/front-end-projects" element={<FrontPage />} />
          <Route path="/back-end-projects" element={<BackPage />} />
          <Route path="/full-stack-projects" element={<FullPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
