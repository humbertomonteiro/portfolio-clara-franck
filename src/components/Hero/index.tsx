import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import event1 from "../../assets/events/event1.jpg";
import event2 from "../../assets/events/event2.jpg";
import event3 from "../../assets/events/event3.jpg";
import event4 from "../../assets/events/event4.jpg";
import event5 from "../../assets/events/event5.jpg";
import logo from "../../assets/logos/logo-no-bg.png";
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
        />
      ))}

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* <div className={styles.overlayContent}> */}
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>Transformamos sonhos em eventos inesquecíveis</h1>
        <p>
          Planejamento estratégico, criatividade e execução impecável para quem
          busca excelência em cada detalhe.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primary}>Organizar meu evento</button>
          <button className={styles.secondary}>Falar com especialista</button>
        </div>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={current === index ? styles.activeDot : styles.dot}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
      {/* </div> */}

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
