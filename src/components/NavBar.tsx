import { NavLink } from "react-router-dom";
import HankoStamp from "./HankoStamp";
import { navItems, site } from "../data/site";
import "./NavBar.css";
import "./HankoStamp.css";

export default function NavBar() {
    return (
        <header className="nav">
            <div className="nav__inner container">
                <NavLink 
                    to="/"
                    className={({ isActive }) => "nav__brand" + (isActive ? " nav__brand--active" : "")}
                    aria-label={`${site.name} - home`}
                >

                    <HankoStamp glyph={site.initial} size={30} />
                    <span className="nav__brand-text">{site.name}</span>
                </NavLink>

                <nav className="nav__links" aria-label="Primary">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => "nav__link" + (isActive ? " nav__link--active" : "")}
                        >
                            <span className="nav__link-hi" aria-hidden="true">{site.displayhindi ? item.hi : ""}</span>
                            <span className="nav__link-en">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <a className="button button--filled" href={site.resumeHref} target="_blank" rel="noreferrer">
                    Résumé
                </a>
            </div>
        </header>
    );
}
