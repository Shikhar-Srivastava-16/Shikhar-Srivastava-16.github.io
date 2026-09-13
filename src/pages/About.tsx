import "./About.css";

export default function About() {
    return (
        <section className="page about">
            <div className="container container--narrow">
                <span className="eyebrow">About</span>
                <h1 className="section-title">Hi, I'm Shikhar!</h1>

                <div className="about__hero">
                    {/* <img
                        className="about__photo"
                        src="/murray.png"
                        alt="Profile photo"
                    /> */}
                    <div className="about__bio">
                        <p className="about__role">Computer Science Student</p>
                        <p className="about__lede">
                            I write code, I take photographs around the world and I write (obsessively). Most days, you'll find me exploring how I can use discrete mathematics to write better production applications.
                        </p>
                        <p className="about__personal">
                            Six years ago, I wrote my first program. Five years ago, I started learning Computer Science. Three Years ago, I started a Computer Science degree at the University of St Andrews, which quickly turned into the best decision of my life. My time at the University has taught me how to apply the Theory of the subject to Software Engineering. As a result, I understand that Software Engineering is more than just writing programs. I also understand the value of having a theoretical background for this practical subject.
                        </p>
                        <p className="about__personal">
                            I have spent the last few years trying to apply my knowledge of Computer Science to Software Engineering. To do this, I have worked in multiple research projects, as well as rewriting existing tech like Agentic AI and Operating Systems using new programming languages. This has always resulted in me learning a lot. Often, I have also been able to make better alternatives for existing software using newer, most recent technology. 
                        </p>
                        <p className="about__personal">
                            When I don't have my nose buried in a book or my eyes fixed on a screen, you might find me travelling to strange places, looking for even stranger things. 
                        </p>
                    </div>
                </div>

                <hr className="divider"/>

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
                            className="github-logo"
                            href="https://github.com/Shikhar-Srivastava-16"
                            target="_blank"
                            rel="noreferrer"
                        >
                            
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
