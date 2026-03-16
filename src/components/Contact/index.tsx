import styles from "./Contact.module.css";
import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Texto */}
        <div className={styles.textContent}>
          <div className={styles.label}>
            <div className={styles.labelLine}></div>
            <span className={styles.subtitle}>Fale Conosco</span>
          </div>

          <h2 className={styles.title}>
            Seja claro(a), fale com a <span>Clara</span>
          </h2>

          <p className={styles.description}>
            Vamos transformar suas ideias em um cenário memorável. Fale com a
            nossa equipe e solicite um orçamento personalizado.
          </p>

          {/* <div className={styles.infoList}>
            <a
              href="https://wa.me/5585987780766"
              target="_blank"
              rel="noreferrer"
              className={styles.infoItem}
            >
              <FaWhatsapp className={styles.icon} />
              <span>(85) 98778-0766</span>
            </a>

            <a
              href="https://instagram.com/cenomagia"
              target="_blank"
              rel="noreferrer"
              className={styles.infoItem}
            >
              <FaInstagram className={styles.icon} />
              <span>@cenomagia</span>
            </a>

            <a
              href="mailto:contato@clarafranck.com.br"
              target="_blank"
              rel="noreferrer"
              className={styles.infoItem}
            >
              <FaEnvelope className={styles.icon} />
              <span>contato@clarafranck.com.br</span>
            </a>
          </div> */}
        </div>

        {/* Formulário */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
          </div>

          <div className={styles.formGroup}>
            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Mensagem</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva seu evento..."
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            <span>Enviar Mensagem</span>
          </button>
        </form>
      </div>
    </section>
  );
}
