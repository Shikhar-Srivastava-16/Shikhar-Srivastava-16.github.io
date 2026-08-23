import { Link } from "react-router-dom";
import { navItems, site } from "../data/site";
import "./Home.css";

const teasers: Record<string, string> = {
    "/about": "What am I like? And what do I do?",
    "/projects": "My OS, my games, my tools and everything else I've worked on",
    "`photography": "See the things I wish I could see every day.",
    "/cad": "",
    "/blog": "Read about what I think about, and what my life is like!",
};

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container hero__inner">
                    <div className="hero__vertical" aria-hidden="true">創る</div>
                    <div className="hero__content">
                        <span className="eyebrow">{site.role}</span>
                        <h1 className="hero__title">
                            {site.name}
                        </h1>
                        <p className="hero__lede">
                            I am a British-Indian MSci Computer Science student at the University of St Andrews. During my
                            Masters, I have researched several kinds of new technologies, often on the bleeding
                            edge of computing and software. I have a special interest in the application of new
                            computing research in the field.
                            As such, I have worked on research projects that use VR, Functional Programming, 3D designs, and AI,
                            and in software projects where I have applied new technology to cutting-edge platforms.

                            In my free time, I sing, I dance, and I travel the world and capture it through a camera lens.

                            Read all about my exploits in my Blog, whether you want an insight into my technical tomfoolery,
                            or if you want to learn about what makes my life interesting.
                        </p>
                        <div className="hero__actions">
                            <Link className="button button--filled" to="/projects">Explore My Projects!</Link>
                            <Link className="button" to="/blog">My Blog: Read about What I do</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-nav">
                <div className="container">
                    <hr className="divider" />
                    <div className="section-nav__grid">
                        {navItems.map((item) => (
                            <Link key={item.to} to={item.to} className="section-nav__card card">
                                <span className="section-nav__jp" aria-hidden="true">{site.displayJapanese ? item.jp : ""}</span>
                                <span className="section-nav__label">{item.label}</span>
                                <span className="section-nav__teaser">{teasers[item.to]}</span>
                                <span className="section-nav__arrow" aria-hidden="true">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
