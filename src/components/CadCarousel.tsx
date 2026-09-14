import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./CadCarousel.css";

type CadCarouselProps = {
  images: string[];
  name: string;
};

export default function CadCarousel({ images, name }: CadCarouselProps) {
  const multi = images.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: multi,
    watchDrag: multi,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div
      className="embla"
      role="region"
      aria-roledescription="carousel"
      aria-label={name}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, i) => (
            <div className="embla__slide" key={`${src}-${i}`}>
              <img
                src={src}
                alt={`${name} view ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {multi && (
        <>
          <button
            type="button"
            className="embla__button embla__button--prev"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="embla__button embla__button--next"
            onClick={scrollNext}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="embla__dots">
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                className={`embla__dot${i === selected ? " is-active" : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === selected}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
