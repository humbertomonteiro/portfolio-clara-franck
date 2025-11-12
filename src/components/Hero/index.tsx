import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Hero.module.css";

// Import da imagem - ajuste o caminho conforme sua estrutura
import claraImage from "../../assets/clara-image.png";

interface HeroProps {
  onCtaClick?: () => void;
  onPortfolioClick?: () => void;
}
const Hero: React.FC<HeroProps> = ({ onCtaClick, onPortfolioClick }) => {
  const handleCtaClick = () => {
    onCtaClick?.();
  };

  const handlePortfolioClick = () => {
    onPortfolioClick?.();
  };

  return (
    <section className={styles.hero}>
      {/* Background com elementos visuais */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrbit}></div>
        <div className={`${styles.gradientOrbit} ${styles.orbit2}`}></div>

        {/* Imagem da Clara */}
        <div className={styles.claraImageContainer}>
          <img
            src={claraImage}
            alt="Clara - Produtora de eventos"
            className={styles.claraImage}
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageOverlayMobile}></div>
        </div>
      </div>

      <div className={styles.heroContainer}>
        {/* Conteúdo de Texto */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleHighlight}>Clara Franck</span>
            Criando experiências que transformam
          </h1>

          <p className={styles.heroSubtitle}>
            Criar experiências que conectam pessoas, despertam emoções e
            celebram o melhor da vida sempre com a essência que define seu
            trabalho: transformar momentos em memórias inesquecíveis.
          </p>

          {/* Botões de Ação */}
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={handleCtaClick}>
              <span>Falar com especialista</span>
              <div className={styles.btnHoverEffect}></div>
            </button>
            <button
              className={styles.btnSecondary}
              onClick={handlePortfolioClick}
            >
              Ver portfólio
            </button>
          </div>

          {/* Destaques */}
          <div className={styles.heroHighlights}>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🎯</div>
              <div>
                <div className={styles.highlightNumber}>100%</div>
                <div className={styles.highlightText}>Personalizado</div>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>✨</div>
              <div>
                <div className={styles.highlightNumber}>360°</div>
                <div className={styles.highlightText}>Soluções completas</div>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>⭐</div>
              <div>
                <div className={styles.highlightNumber}>5.0</div>
                <div className={styles.highlightText}>Avaliação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Side - Desktop Only */}
        <div className={styles.heroVisual}>
          <div className={styles.visualContainer}>
            {/* Elemento Visual Abstrato */}
            <div className={styles.abstractVisual}>
              <div className={styles.visualOrb}></div>
              <div className={styles.visualOrb}></div>
              <div className={styles.visualOrb}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator com React Icons */}
      <div className={styles.scrollIndicator}>
        <FaChevronDown className={styles.scrollIcon} />
      </div>
    </section>
  );
};

export default Hero;
