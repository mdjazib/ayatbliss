import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './view/Home';
import { Favorites } from './view/Favorites';
import "./styles/style.scss";
import { Header } from './components/Header';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Favorites />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
