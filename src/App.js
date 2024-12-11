
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
            <Route path="/pricing" element={<div>Pricing Page</div>} />
            <Route path="/reviews" element={<div>Reviews Page</div>} />
            <Route path="/verification-cards" element={<div>Verification Cards Page</div>} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/gallery" element={<div>Gallery Page</div>} />
            <Route path="/faqs" element={<div>FAQs Page</div>} />
            <Route path="/rates" element={<div>Rates Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Router>
  );
}

export default App;
