"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import styles from "./page.module.css"

export default function LoginPage() {
  const router = useRouter()
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeMail = (event) => {
    setMail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    fetch("http://localhost:4000/usuarios")
      .then((response) => response.json())
      .then((data) => {
        const usuario = data.find(
          (u) => u.email === mail && u.contraseña === Number(password)
        )

        if (usuario) {
          router.push(`/home?id=${usuario.id_usuario}&nombre=${usuario.nombre}&es_admin=${usuario.es_admin}`)
        } else {
          alert("Email o contraseña incorrectos")
        }
      })
  }

  const irARegister = () => {
    router.push("/register")
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.formulario}>
        <span className={styles.marca}>PioZone</span>
        <h1 className={styles.titulo}>Iniciar sesión</h1>
        <p className={styles.subtitulo}>Entrá para seguir todo el deporte en vivo.</p>

        <label className={styles.etiqueta}>Email</label>
        <Input onChange={onChangeMail} placeholder={"tu@email.com"} value={mail} type={"email"} />

        <label className={styles.etiqueta}>Contraseña</label>
        <Input onChange={onChangePassword} placeholder={"contraseña"} value={password} type={"password"} />

        <Button onClick={handleLogin} className={styles.botonEnviar}>
          Activar el prime
        </Button>
      </div>

      <div className={styles.cambiarModo}>
        <span>¿Todavía no tenés cuenta?</span>
        <Button onClick={irARegister} variante="fantasma">
          Registrate ya maquina
        </Button>
      </div>
    </div>
  )
}
