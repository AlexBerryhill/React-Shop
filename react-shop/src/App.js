import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// CSS
import './App.css';
// Components
import Navbar from './components/Navbar';
import Links from './components/Links';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Links />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
