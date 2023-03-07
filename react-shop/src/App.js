import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Links from './components/Links'

function App() {
  return (
    <Router>
      {/* <Sidebar />
      <Header /> */}
      <Navbar />
      <Links />
      <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/assets' element={<Assets />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/overview' element={<Overview />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
