import { useState, useEffect } from "react";
import { MenuIcon, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

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

  const navItems = language === 'en' ? [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about-me" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Activities", href: "#activities" },
  ] : [
    { name: "หน้าแรก", href: "#home" },
    { name: "เกี่ยวกับฉัน", href: "#about-me" },
    { name: "การศึกษา", href: "#education" },
    { name: "ประสบการณ์", href: "#experience" },
    { name: "ผลงาน", href: "#projects" },
    { name: "กิจกรรม", href: "#activities" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-white/10 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300 tracking-tight"
        >
          PS.
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

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200"
          >
            <Languages className="w-4 h-4" />
            {language === 'en' ? 'TH' : 'EN'}
          </button>

          <input
            type="checkbox"
            className="theme-controller hidden"
            value="synthwave"
          />
        </div>
        <div className="md:hidden flex items-center gap-4 text-slate-500 hover:text-slate-700 transition-colors">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200"
          >
            <Languages className="w-4 h-4" />
            {language === 'en' ? 'TH' : 'EN'}
          </button>
          <MenuIcon
            onClick={toggleMenu}
            className=" focus:outline-none cursor-pointer"
            color="currentColor"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-50/80  border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="text-slate-500 hover:text-slate-700 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
