import React from "react";
import styles from "./Footer.module.css";
import loopBlack from "../../../assets/gifs/loop-black.gif";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Nome / Marca */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>
            {/* Clara <span>Franck</span> */}
            <img src={loopBlack} alt="animação" className={styles.loopBlack} />
          </h3>
          {/* <p className={styles.description}>Produção | Eventos | Lifestyle</p> */}
        </div>

        {/* Navegação */}
        <nav className={styles.nav}>
          <a href="#about">Sobre</a>
          <a href="#events">Eventos</a>
          <a href="#contact">Contato</a>
        </nav>

        {/* Direitos */}
        <div className={styles.copy}>
          <p>
            © {new Date().getFullYear()} Clara Franck — Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
