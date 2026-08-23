import "./About.css";

export default function About() {
    return (
        <section className="page about">
            <div className="container container--narrow">
                <span className="eyebrow">About</span>
                <h1 className="section-title">Hi, I'm Shikhar!</h1>
                <p className="about__lede">
                    This page is intentionally bare for now — a placeholder while the
                    rest of the site takes shape. A short bio, a photo, and a few
                    highlights will live here.
                </p>
                <hr className="divider" />
                <p>
                    In the meantime: I build things, take photographs, and occasionally
                    write about both. Use the navigation above to see the work.
                </p>
            </div>
        </section>
    );
}
