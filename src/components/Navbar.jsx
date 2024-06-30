import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register" className="mr-4">Register</Link>
        <Link to="/chat">Chat</Link>
      </div>
      <Button variant="outline" onClick={() => alert('Logout functionality not implemented yet')}>Logout</Button>
    </nav>
  );
};

export default Navbar;