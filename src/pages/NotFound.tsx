import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page">
      <div className="container container--narrow" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>404</span>
        <h1 className="section-title">This page wandered off.</h1>
        <p>Nothing here yet. Try one of the sections in the nav above.</p>
        <Link className="button button--filled" to="/">Back home</Link>
      </div>
    </section>
  );
}
