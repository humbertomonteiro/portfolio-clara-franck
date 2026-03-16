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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="about">
      <div className={styles.container}>
        {/* Imagem */}
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

        {/* Conteúdo */}
        <div className={styles.content}>
          <div className={styles.label}>
            <div className={styles.labelLine}></div>
            <span className={styles.subtitle}>Sobre</span>
          </div>

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

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Anos de experiência</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Empresas</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Memórias criadas</span>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={loopWhite} alt="Animação" className={styles.loopWhite} /> */}
    </section>
  );
};

export default About;
