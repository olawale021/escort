
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import RateCard from './pages/rate_card/RateCard';
import Reviews from './pages/reviews/Reviews';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
            <Route path="/ratecard" element={<RateCard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/verification-cards" element={<div>Verification Cards Page</div>} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<div>FAQs Page</div>} />
            <Route path="/rates" element={<div>Rates Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Router>
  );
}

export default App;
