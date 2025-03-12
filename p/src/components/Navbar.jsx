import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-[#F29F05] shadow-lg p-6 sticky top-0 left-0 w-full z-50 transition-all duration-300 h-20 flex items-center">
      <div className="flex items-center justify-between max-w-[90%] mx-auto w-full">
        
        {/* Mobile: Show WhatsApp Number Instead of Logo */}
        <div className="md:hidden flex flex-col text-white font-semibold text-sm">
          <a
            href="https://wa.me/918808132544"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-base transition-transform duration-300 hover:scale-105"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
          <span className="text-base">+91 7985474104</span>
        </div>

        {/* Desktop: Show Logo */}
        <div className="hidden md:block text-2xl font-extrabold text-white tracking-wide">PANDIT RAVI MISHRA</div>

        {/* Desktop Navigation - Centered */}
        <ul className="hidden md:flex md:gap-10 absolute left-1/2 transform -translate-x-1/2">
          {[
            { name: "Home", id: "home" },
            { name: "Pooja", id: "pooja" },
            { name: "About Us", id: "about-us" },
            { name: "Contact Us", id: "contact-us" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="text-white text-lg font-semibold relative group transition-transform duration-300 hover:scale-105"
              >
                {item.name}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Navigation Links - Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#F29F05] shadow-md flex flex-col gap-4 py-6 text-center md:hidden"
            >
              {[
                { name: "Home", id: "home" },
                { name: "Pooja", id: "pooja" },
                { name: "About Us", id: "about-us" },
                { name: "Contact Us", id: "contact-us" },
              ].map((item, index) => (
                <motion.li key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * index }}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="block py-2 px-6 text-white text-lg font-semibold relative transition-transform duration-300 hover:scale-105"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Desktop: WhatsApp & Contact Number */}
        <div className="hidden md:flex items-center gap-4 text-white text-lg font-semibold">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <FaWhatsapp size={24} /> WhatsApp
          </a>
          <span className="transition-transform duration-300 hover:scale-105">+91 98765 43210</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  