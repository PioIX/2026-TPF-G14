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
      <h1 className={styles.titulo}>Bienvenido a PioZone</h1>
      <p className={styles.descripcion}>Toda la información deportiva en un solo lugar</p>

      <div className={styles.botones}>
        <Button onClick={irALogin}>Iniciar Sesión</Button>
        <Button onClick={irARegister}>Registrarse</Button>
      </div>
    </div>
  )
}