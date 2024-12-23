
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import RateCard from './pages/rate_card/RateCard';
import Reviews from './pages/reviews/Reviews';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import TawkTo from "./components/TawkTo";
import {Navbar} from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import FAQ from "./pages/faq/Faq";


function App() {
  return (
      <Router>
          <Navbar />
          <TawkTo />
        <Routes>
          <Route path="/" element={<Homepage />} />
            <Route path="/ratecard" element={<RateCard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/verification-cards" element={<div>Verification Cards Page</div>} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
