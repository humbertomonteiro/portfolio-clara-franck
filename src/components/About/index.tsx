import React from "react";
import styles from "./About.module.css";
import claraAboutImage from "../../assets/clara-image.png";

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Lado Esquerdo: Imagem */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img
              src={claraAboutImage}
              alt="Clara Franck em evento"
              className={styles.aboutImage}
            />
            <div className={styles.imageDecoration}></div>
          </div>
        </div>

        {/* Lado Direito: Texto */}
        <div className={styles.textSection}>
          <div className={styles.textContent}>
            <div className={styles.titleWrapper}>
              <span className={styles.subtitle}>Conheça</span>
              <h2 className={styles.title}>
                Clara <span className={styles.highlight}>Franck</span>
              </h2>
              <div className={styles.titleLine}></div>
            </div>

            <div className={styles.paragraphs}>
              <div className={styles.paragraph}>
                <div className={styles.paragraphIcon}>✦</div>
                <p>
                  Clara Franck é empresária à frente da{" "}
                  <strong>
                    Cenomagia, For You Eventos, Vila Tabajara, Casa Santa
                    Flecheiras
                  </strong>{" "}
                  e sócia local nos renomados <strong>Ninetto</strong> e{" "}
                  <strong>Tatu Bola</strong>, entre outros, referências em
                  entretenimento e lifestyle no Ceará.
                </p>
              </div>

              <div className={styles.paragraph}>
                <div className={styles.paragraphIcon}>✦</div>
                <p>
                  Com uma trajetória marcada por autenticidade e visão criativa,
                  Clara assina produções que se tornaram ícones da cena
                  cearense, como <strong>Camarote Mucuripe</strong>,{" "}
                  <strong>Santa Flecheiras</strong>,
                  <strong> Bloquinho de Verão</strong> e{" "}
                  <strong>HallowYou</strong>, entre outras.
                </p>
              </div>

              <div className={styles.paragraph}>
                <div className={styles.paragraphIcon}>✦</div>
                <p>
                  Mais do que eventos, ela cria{" "}
                  <strong>experiências que conectam pessoas</strong>, despertam
                  emoções e celebram o melhor da vida — sempre com a essência
                  que define seu trabalho: transformar momentos em{" "}
                  <strong>memórias inesquecíveis</strong>.
                </p>
              </div>
            </div>

            <div className={styles.signature}>
              <div className={styles.signatureLine}></div>
              <span className={styles.signatureText}>Visão e Criatividade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
