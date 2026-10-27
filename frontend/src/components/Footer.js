import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <p className={styles.texto}>PioZone · Toda la información deportiva en un solo lugar.</p>
      </div>
    </footer>
  )
}