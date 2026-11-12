import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <div className={styles.marca}>
          <span className={styles.logo}>PZ</span>
          <span className={styles.nombre}>PioZone</span>
        </div>
        <p className={styles.texto}>Toda la información deportiva en un solo lugar.</p>
        <span className={styles.anio}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
