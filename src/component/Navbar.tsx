import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
   <nav className="bg-black text-white px-6 py-4 md:px-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">Mukesh</h1>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 font-medium items-center">
        <Link to='/work' className="hover:text-blue-400 cursor-pointer">Work</Link>
        <Link to='/project' className="hover:text-blue-400 cursor-pointer">Tools</Link>
        <Link to='/about' className="hover:text-blue-400 cursor-pointer">About</Link>
        <Link to='/contact' className="hover:text-blue-400 cursor-pointer">Contact</Link>
        <button className="bg-blue-300 text-black font-medium px-4 py-2 rounded-md hover:bg-blue-400">Get in Touch</button>
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 z-10 md:hidden z-[999]">
          <li className="hover:text-blue-400 cursor-pointer">Work</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Tools</li>
          <li className="hover:text-blue-400 cursor-pointer">Blog</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          <button className="bg-blue-300 text-black font-medium px-4 py-2 rounded-md hover:bg-blue-400">Get in Touch</button>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
