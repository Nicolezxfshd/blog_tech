import styles from "./styles.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Mosaico de Ideias</h3>
            <p className={styles.description}>
             O lugar perfeito para explorar e compartilhar conhecimento.
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Contato</h4>
            <p>📧 contato@mosaicodeideias.com</p>
            <p>📞 (11) 9999-9999</p>
            <p>📍 São Paulo, SP</p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Redes Sociais</h4>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2025 Mosaico de Ideias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}