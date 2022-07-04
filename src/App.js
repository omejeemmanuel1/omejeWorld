import './App.css';
import Navbar from './components/header/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homePage/Home';
import Footer from './components/footer.js/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
