import React, { useState, useEffect } from "react";
import styles from "./EventsGallery.module.css";

// Importe suas imagens
import img1 from "../../assets/events/event4.jpg";
import img2 from "../../assets/events/event5.jpg";
import img3 from "../../assets/events/event6.jpg";
import img4 from "../../assets/events/event7.jpg";
import img5 from "../../assets/events/event5.jpg";
import img6 from "../../assets/events/event6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const EventsGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Troca automática a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.gallerySection} id="events">
      <div className={styles.container}>
        {/* GRID DE MINIATURAS */}
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

        {/* IMAGEM EM DESTAQUE */}
        <div className={styles.featuredWrapper}>
          <div className={styles.featuredImageContainer}>
            <img
              src={images[currentImage]}
              alt="Evento em destaque"
              className={styles.featuredImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
