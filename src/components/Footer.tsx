import { site } from "../data/site";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__mark" aria-hidden="true">{site.initial}</span>
        <p className="footer__text">
          © {new Date().getFullYear()} {site.name}. Built with React &amp; TypeScript.
        </p>
        <div className="footer__socials">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </footer>
  );
}
