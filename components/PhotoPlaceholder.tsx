import Crest from "@/components/Crest";

export default function PhotoPlaceholder() {
  return (
    <figure className="photo-note">
      <div className="trainer-card-top">
        <span>Trainer profile</span>
        <span aria-hidden="true">◆</span>
      </div>
      <div
        className="photo-placeholder"
        role="img"
        aria-label="Placeholder for Nitish’s photo"
      >
        <Crest className="portrait-crest" />
        <svg
          className="portrait-outline"
          viewBox="0 0 240 240"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="120" cy="87" r="32" />
          <path d="M58 192v-17c0-30 28-52 62-52s62 22 62 52v17" />
          <path d="M28 57V28h29m126 0h29v29M28 183v29h29m126 0h29v-29" />
        </svg>
        <span>My photo goes here</span>
      </div>
      <figcaption>
        <span>
          <strong>Nitish Kumar</strong>
          <small>Still choosing my own path.</small>
        </span>
        <span className="trainer-monogram" aria-hidden="true">
          N.
        </span>
      </figcaption>
    </figure>
  );
}
