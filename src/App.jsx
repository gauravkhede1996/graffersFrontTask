import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import Company from './CompanyDetailPage';

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company-detail" element={<Company />} />
      </Routes>
    </Router>
  );
};

export default App;
