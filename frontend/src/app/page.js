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
      <h1 className={styles.titulo}>Bienvenido a PioZone, CAMPEÓN!</h1>
      <p className={styles.descripcion}>Acá vas a ver todo lo que necesitas sobre todos los deportes</p>

      <div className={styles.botones}>
        <Button onClick={irALogin}>Ya soy un Campeón</Button>
        <Button onClick={irARegister}>Quiero ser un Campeón</Button>
      </div>
    </div>
  )
}