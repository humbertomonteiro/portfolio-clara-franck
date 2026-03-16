import styles from "./caroselScrollInfinit.module.css";

const items = [
  "Produção de Eventos",
  "Clara Franck",
  "Cenomagia",
  "For You Eventos",
  "Vila Tabajara",
  "Camarote Mucuripe",
  "HallowYou",
  "Santa Flecheiras",
];

const CarouselScrollInfinit = () => {
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarouselScrollInfinit;
