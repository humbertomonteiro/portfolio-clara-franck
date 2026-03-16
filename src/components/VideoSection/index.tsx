import { useState } from "react";
import styles from "./VideoSection.module.css";

const VIDEO_ID = "go3ZPd1v6xY";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={styles.section} id="video">
      <div className={styles.header}>
        <div className={styles.label}>
          <div className={styles.labelLine}></div>
          <span className={styles.sectionTag}>Experiência</span>
        </div>
        <h2 className={styles.sectionTitle}>Veja como fazemos acontecer</h2>
      </div>

      <div className={styles.videoWrapper}>
        {!playing ? (
          <div className={styles.thumbnail} onClick={() => setPlaying(true)}>
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Assistir vídeo"
              className={styles.thumbImg}
            />
            <div className={styles.overlay}></div>
            <button className={styles.playButton} aria-label="Reproduzir vídeo">
              <div className={styles.playRing}></div>
              <div className={styles.playRingOuter}></div>
              <svg
                className={styles.playIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className={styles.watchLabel}>Assistir vídeo</div>
          </div>
        ) : (
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title="Clara Franck — Vídeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {/* Decorative borders */}
        <div className={styles.borderTopLeft}></div>
        <div className={styles.borderBottomRight}></div>
      </div>
    </section>
  );
}
