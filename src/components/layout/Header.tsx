import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import { useInquiry } from "../../context/InquiryContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Supermarket Supply", path: "/supermarket-supply" },
  { label: "HORECA Supply", path: "/horeca-supply" },
  { label: "Quality Standards", path: "/quality-standards" },
  { label: "Presentation", path: "/presentation" },
];

const Header = () => {
  const { totalItems } = useInquiry();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header-glass fixed left-0 top-0 z-50 w-full">
      <div className="app-container flex h-20 items-center justify-between">
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center rounded-2xl bg-white px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        >
          <img
            src="/logosite.jpg"
            alt="Hayleys Agri Fresh"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition xl:px-4 ${
                  isActive
                    ? "bg-white text-[var(--color-deep-green)]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white/10 md:flex"
          >
            <FiSearch />
          </button>

          <NavLink
            to="/inquiry"
            className="btn-primary hidden !px-4 !py-3 md:flex xl:!px-5"
          >
            <FiShoppingBag />
            <span className="hidden xl:inline">Inquiry Basket</span>
            <span className="xl:hidden">Inquiry</span>

            {totalItems > 0 && (
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#102014] text-xs text-white">
                {totalItems}
              </span>
            )}
          </NavLink>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
          >
            {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#062515]/95 px-4 py-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[92rem] flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-white text-[var(--color-deep-green)]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/inquiry"
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#E5B84B] px-4 py-3 text-sm font-bold text-[#082817]"
            >
              <FiShoppingBag />
              Inquiry Basket
              {totalItems > 0 && (
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#102014] text-xs text-white">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;