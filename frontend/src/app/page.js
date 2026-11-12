"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/Button"
import styles from "./page.module.css"

export default function Home() {
  const router = useRouter()

  const irALogin = () => {
    router.push("/login")
  }

  const irARegister = () => {
    router.push("/register")
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.fondo} aria-hidden="true">
        <span className={styles.circulo} />
        <span className={styles.circuloChico} />
      </div>

      <div className={styles.contenido}>
        <span className={styles.marca}>PioZone</span>
        <h1 className={styles.titulo}>Bienvenido a PioZone, CAMPEÓN!</h1>
        <p className={styles.descripcion}>Acá vas a ver todo lo que necesitas sobre todos los deportes</p>

        <div className={styles.botones}>
          <Button onClick={irALogin}>Ya soy un Campeón</Button>
          <Button onClick={irARegister} variante="secundario">
            Quiero ser un Campeón
          </Button>
        </div>

        <div className={styles.pie}>
          <span>Deportes</span>
          <span>Equipos</span>
          <span>Jugadores</span>
          <span>Competencias</span>
        </div>
      </div>
    </div>
  )
}
