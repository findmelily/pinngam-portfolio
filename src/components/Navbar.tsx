import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Profile", href: "#profile" },
    { name: "Activities", href: "#activities" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-sky-100/80 backdrop-blur-md border-white/10 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-slate-400 tracking-tight"
        >
          Pinngam S.
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
  
          <input
            type="checkbox"
            className="theme-controller hidden"
            value="synthwave"
          />
        </div>
        <div className="md:hidden flex items-center gap-4 text-slate-500 hover:text-slate-700 transition-colors">
          <MenuIcon
            onClick={toggleMenu}
            className=" focus:outline-none"
            color="currentColor"
          ></MenuIcon>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-50/80  border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-slate-500 hover:text-slate-700 font-medium"
          >
            Home
          </a>
          <a
            href="#profile"
            onClick={toggleMenu}
            className="text-slate-500 hover:text-slate-700 font-medium"
          >
            Profile
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-slate-500 hover:text-slate-700 font-medium"
          >
            About
          </a>
          <a
            href="#activities"
            onClick={toggleMenu}
            className="text-slate-500 hover:text-slate-700 font-medium"
          >
            Activities
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
