import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopUsers from './pages/topusers';
import TrendingPosts from './pages/trending';
import Feed from './pages/feed';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
