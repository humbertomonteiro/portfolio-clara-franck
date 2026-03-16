import React, { useState, useEffect } from "react";
import styles from "./EventsGallery.module.css";

import img1 from "../../assets/events/event4.jpg";
import img2 from "../../assets/events/event5.jpg";
import img3 from "../../assets/events/event6.jpg";
import img4 from "../../assets/events/event7.jpg";
import img5 from "../../assets/events/event2.jpg";
import img6 from "../../assets/events/event3.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const EventsGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.gallerySection} id="events">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.label}>
            <div className={styles.labelLine}></div>
            <span className={styles.sectionTag}>Portfólio</span>
          </div>
          <h2 className={styles.sectionTitle}>Eventos & Produções</h2>
        </div>
      </div>

      <div className={styles.container}>
        {/* Grid de miniaturas */}
        <div className={styles.grid}>
          {images.map((img, index) => (
            <button
              key={index}
              className={`${styles.thumbWrapper} ${
                currentImage === index ? styles.activeThumb : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={img}
                alt={`Evento ${index + 1}`}
                className={styles.thumbnail}
              />
            </button>
          ))}
        </div>

        {/* Imagem em destaque */}
        <div className={styles.featuredWrapper}>
          <div className={styles.featuredImageContainer} key={currentImage}>
            <img
              src={images[currentImage]}
              alt="Evento em destaque"
              className={styles.featuredImage}
            />
          </div>
          <span className={styles.counter}>
            {String(currentImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
