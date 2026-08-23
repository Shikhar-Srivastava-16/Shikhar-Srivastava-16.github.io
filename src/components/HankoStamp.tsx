type HankoStampProps = {
  glyph?: string;
  size?: number;
  display?: boolean;
};

/**
 * The site's signature mark: a hanko (Japanese name-seal) rendered in the
 * vermillion accent. Used as the wordmark in the nav and as a recurring
 * motif on section dividers.
 */
export default function HankoStamp({ glyph = "印", size = 34, display = true }: HankoStampProps) {
  return (
    <span
      className="hanko"
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.5 }}
    >
      {display ? glyph : null}
    </span>
  );
}
