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
          (u) => u.email === mail && u.password === password
        )

        if (usuario) {
          router.push(`/home?id=${usuario.id_usuario}&nombre=${usuario.nombre}`)
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
        <h1 className={styles.titulo}>Iniciar Sesión</h1>

        <label className={styles.etiqueta}>Email</label>
        <Input onChange={onChangeMail} placeholder={"email"} value={mail} type={"email"} />

        <label className={styles.etiqueta}>Contraseña</label>
        <Input onChange={onChangePassword} placeholder={"contraseña"} value={password} type={"password"} />

        <Button onClick={handleLogin}>Ingresar</Button>
      </div>

      <div className={styles.cambiarModo}>
        <Button onClick={irARegister}>No tenes cuenta? registrate</Button>
      </div>
    </div>
  )
}