import "./About.css";

export default function About() {
    return (
        <section className="page about">
            <div className="container container--narrow">
                <span className="eyebrow">About</span>
                <h1 className="section-title">Hi, I'm Shikhar!</h1>

                <div className="about__hero">
                    <img
                        className="about__photo"
                        src="/murray.png"
                        alt="Profile photo"
                    />
                    <div className="about__bio">
                        <p className="about__role">Computer Science Student</p>
                        <p className="about__lede">
                            I build things, take photographs, and occasionally write about both.
                        </p>
                        <p className="about__personal">
                            Based in India, I'm currently exploring the intersection of software
                            development and creative technology. When I'm not coding, you can find
                            me behind a camera or experimenting with new tools.
                        </p>
                    </div>
                </div>

                <hr className="divider" />

                <div className="about__boxes">
                    <div className="about__box about__box--experience">
                        <h3>Experience</h3>
                        <ul>
                            <li>M.Sci (Hons) Computer Science, University of St Andrews</li>
                            <li>Research: VR, Functional Programming, AI</li>
                            <li>Practical projects in CAD and creative tech</li>
                        </ul>
                    </div>

                    <div className="about__box about__box--projects">
                        <h3>Projects</h3>
                        <ul>
                            <li>Open source tools and utilities</li>
                            <li>Creative coding experiments</li>
                            <li>CAD and 3D modeling projects</li>
                        </ul>
                    </div>

                    <div className="about__box about__box--github">
                        <a
                            className="button button--filled"
                            href="https://github.com/Shikhar-Srivastava-16"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
