import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import event1 from "../../assets/events/event1.jpg";
import event2 from "../../assets/events/event2.jpg";
import event3 from "../../assets/events/event3.jpg";
import event4 from "../../assets/events/event4.jpg";
import event5 from "../../assets/events/event5.jpg";
import logo from "../../assets/gifs/loop-infinit.gif";
import CarouselScrollInfinit from "../shared/CarouselScrollInfinity";

const images = [event1, event2, event3, event4, event5];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Evento"
          className={index === current ? styles.activeSlide : styles.slide}
          loading="lazy"
        />
      ))}

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>
          Eu não vendo ingressos,
          <br />
          emociono pessoas.
        </h1>
        <p>
          Planejamento estratégico, criatividade e execução impecável para quem
          busca excelência em cada detalhe.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primary}>
            <span>Organizar meu evento</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>

      {/* Image dots */}
      <div className={styles.imageDots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={current === index ? styles.activeDot : styles.dot}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Carousel strips */}
      <div className={styles.line1}>
        <CarouselScrollInfinit />
      </div>
      <div className={styles.line2}>
        <CarouselScrollInfinit />
      </div>
      <div className={styles.line3}>
        <CarouselScrollInfinit />
      </div>
    </section>
  );
}
