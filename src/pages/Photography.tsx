import { photos } from "../data/photography";
import "./Photography.css";

export default function Photography() {
  return (
    <section className="page photography">
      <div className="container">
        <span className="eyebrow">Photography</span>
        <h1 className="section-title">Photographs</h1>
        <p className="photography__lede">
          Mostly wildlife and birding across North-Western India and the
          Himalaya, with the occasional piece of architecture that refused to
          be walked past.
        </p>

        <div className="photo-grid">
          {photos.map((photo, i) => (
            <figure className={"photo-grid__item" + (i % 5 === 0 ? " photo-grid__item--tall" : "")} key={photo.src}>
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
