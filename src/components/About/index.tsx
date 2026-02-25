// About.tsx
import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import claraAboutImage from "../../assets/clara-image.png";
import logo from "../../assets/logos/logo-name.png";
import loopWhite from "../../assets/gifs/loop-white.gif";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="about">
      <div className={styles.container}>
        {/* Lado esquerdo - Imagem */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBorder}>
            <img
              src={claraAboutImage}
              alt="Clara Franck"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>

        {/* Lado direito - Conteúdo */}
        <div className={styles.content}>
          <span className={styles.subtitle}>Sobre</span>

          {/* <h2 className={styles.title}>Clara Franck</h2> */}
          <img src={logo} alt="Logo" className={styles.logo} />

          <div className={styles.bio}>
            <p className={styles.paragraph}>
              Empresária à frente da <strong>Cenomagia</strong>,{" "}
              <strong>For You Eventos</strong>, <strong>Vila Tabajara</strong>,{" "}
              <strong>Casa Santa Flecheiras</strong> e sócia local nos renomados{" "}
              <strong>Ninetto</strong> e <strong>Tatu Bola</strong>.
            </p>

            <p className={styles.paragraph}>
              Assina produções que se tornaram ícones da cena cearense, como{" "}
              <strong>Camarote Mucuripe</strong>,{" "}
              <strong>Santa Flecheiras</strong>,{" "}
              <strong>Bloquinho de Verão</strong> e <strong>HallowYou</strong>.
            </p>

            <p className={styles.paragraph}>
              Cria <strong>experiências que conectam pessoas</strong> e
              transformam momentos em memórias inesquecíveis.
            </p>
          </div>
        </div>
      </div>
      <img src={loopWhite} alt="Animação" className={styles.loopWhite} />
    </section>
  );
};

export default About;
