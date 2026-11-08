import { useEffect, useState } from "react";
import logo from "../assets/fjbs-logo-primary.svg";
import { company, navLinks } from "../data";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="brand" href="#top" aria-label={`${company.name}, home`}>
          <img src={logo} alt={company.name} width="144" height="58" />
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" />
          <span>Menu</span>
        </button>
        <nav id="nav" className={open ? "nav open" : "nav"} aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-accent" href="#contact" onClick={() => setOpen(false)}>
            Request a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
