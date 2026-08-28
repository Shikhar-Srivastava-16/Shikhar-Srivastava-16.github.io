import { Link } from "react-router-dom";
import { navItems, site } from "../data/site";
import "./Home.css";

const teasers: Record<string, string> = {
    "/about": "What am I like? And what do I do?",
    "/projects": "My OS, my games, my tools and everything else I've worked on",
    "/photography": "See the things I want to see every time I close my eyes. ",
    "/cad": "Learn about the things I've brought from Abbot's Flatland into our world",
    "/blog": "Get to know what I think about, and what my life is like!",
};

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container hero__inner">
                    <div className="hero__content">
                        <span className="eyebrow">{site.role}</span>
                        <h1 className="hero__title">
                            {site.name}
                        </h1>
                        <p className="hero__lede">
                            I am an M.Sci (hons) Computer Science student at the University of St Andrews. During my
                            Masters, I have researched several kinds of bleeding-edge computing and software. 
                            I have a special interest in the application of new computing research in the field.
                            My practical experience includes projects that use VR, Functional Programming, CAD, and AI,
                            <br/>
                            In my free time, I sing, I dance, and I travel the world and capture it through a camera lens.
                            <br/>
                            Read all about my exploits in my Blog, whether you want an insight into my technical tomfoolery,
                            or if you want to learn about what makes my life interesting.
                        </p>
                        <div className="hero__actions">
                            <Link className="button button--filled" to="/projects">Explore My Projects!</Link>
                            <Link className="button" to="/blog">My Blog: Read about What I do</Link>
                        </div>
                    </div>
                        <section className="section-nav">
                            <div className="container">
                                {/* <hr className="divider" /> */}
                                <div className="section-nav__grid">
                                    {navItems.map((item) => (
                                        <Link key={item.to} to={item.to} className="section-nav__card card">
                                            <span className="section-nav__hi" aria-hidden="true">{site.displayhindi ? item.hi : ""}</span>
                                            <span className="section-nav__label">{item.label}</span>
                                            <span className="section-nav__teaser">{teasers[item.to]}</span>
                                            <span className="section-nav__arrow" aria-hidden="true"></span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                </div>
            </section>

        </>
    );
}
