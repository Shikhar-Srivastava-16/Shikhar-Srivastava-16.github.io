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
// FIXME: switch this out
export default function HankoStamp({ glyph = "印", display = true }: HankoStampProps) {
  return (
    <span
      className="hanko"
      aria-hidden="true"
    >
      {display ? glyph : null}
    </span>
  );
}
