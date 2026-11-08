import logo from "../assets/fjbs-logo-on-dark.svg";
import { company, navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <img src={logo} alt={company.name} width="170" height="69" />
        <nav aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p>
          &copy; {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  );
}
