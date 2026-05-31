import { NavLink } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";
import { useInquiry } from "../../context/InquiryContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
 
  { label: "HORECA Supply", path: "/horeca-supply" },
  { label: "Quality Standards", path: "/quality-standards" },
  { label: "Inquiry", path: "/inquiry" },
];

const Header = () => {
  const { totalItems } = useInquiry();

  return (
    <header className="header-glass fixed left-0 top-0 z-50 w-full">
      <div className="app-container flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-[var(--color-deep-green)]">
            HA
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-soft-green)]">
              Hayleys
            </p>
            <h1 className="text-lg font-bold text-white">Agri Fresh</h1>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
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
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white/10 md:flex"
          >
            <FiSearch />
          </button>

          <NavLink
            to="/inquiry"
            className="btn-primary hidden !px-5 !py-3 md:flex"
          >
            <FiShoppingBag />
            Inquiry Basket

            {totalItems > 0 && (
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#102014] text-xs text-white">
                {totalItems}
              </span>
            )}
          </NavLink>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white xl:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;