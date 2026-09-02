import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import logo from "../assets/images/logo.png";
import "./Layout.css";

const navigation = [
  {
    number: "01",
    label: "Home",
    path: "/",
  },
  {
    number: "02",
    label: "About Us",
    path: "/about",
  },
  {
    number: "03",
    label: "Interior",
    path: "/interior",
  },
  {
    number: "04",
    label: "Vastu",
    path: "/vastu",
  },
  {
    number: "05",
    label: "Decor",
    path: "/decor",
  },
  {
    number: "06",
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    number: "07",
    label: "Contact",
    path: "/contact",
  },
];

function getNavClass({ isActive }) {
  return `premiumNavLink ${isActive ? "active" : ""}`;
}

function getMobileNavClass({ isActive }) {
  return `premiumMobileLink ${isActive ? "active" : ""}`;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="premiumHeader">
      <div className="premiumHeaderShell">
        <div className="premiumHeaderInner">
          <NavLink
            to="/"
            className="premiumHeaderLogo"
            aria-label="Space Decor Belle home"
          >
            <img
              src={logo}
              alt="Space Decor Belle"
            />
          </NavLink>

          <nav
            className="premiumDesktopNav"
            aria-label="Main navigation"
          >
            {navigation.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={getNavClass}
                style={{
                  "--nav-delay": `${0.4 + index * 0.1}s`,
                }}
              >
                <span className="navDot" />
                <span className="navText">
                  {item.label}
                </span>
                <span className="navActiveLine" />
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/consultation"
            className="premiumHeaderCta"
          >
            Book Consultation
            <FiArrowUpRight />
          </NavLink>

          <button
            type="button"
            className="premiumMenuButton"
            aria-label={
              menuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`premiumMobileMenu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={getMobileNavClass}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobileNavNumber">
                {item.number}
              </span>

              <span className="mobileNavLabel">
                {item.label}
              </span>

              <span className="mobileNavDot" />
            </NavLink>
          ))}

          <NavLink
            to="/consultation"
            className="premiumMobileCta"
            onClick={() => setMenuOpen(false)}
          >
            Book Consultation
            <FiArrowUpRight />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}