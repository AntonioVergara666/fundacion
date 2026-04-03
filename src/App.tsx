import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Belleza from './pages/Belleza';
import Salud from './pages/Salud';
import Educacion from './pages/Educacion';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/belleza" element={<Belleza />} />
            <Route path="/salud" element={<Salud />} />
            <Route path="/educacion" element={<Educacion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
