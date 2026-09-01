type HankoStampProps = {
  glyph?: string;
  size?: number;
  display?: boolean;
};

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
