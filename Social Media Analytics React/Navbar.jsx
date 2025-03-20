// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-around">
      <Link to="/" className="font-bold">Feed</Link>
      <Link to="/top-users">Top Users</Link>
      <Link to="/trending-posts">Trending Posts</Link>
    </nav>
  );
}

export default Navbar;
