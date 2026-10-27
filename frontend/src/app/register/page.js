"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import styles from "./page.module.css"

export default function RegisterPage() {
  const router = useRouter()
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeNombre = (event) => {
    setNombre(event.target.value)
  }

  const onChangeApellido = (event) => {
    setApellido(event.target.value)
  }

  const onChangeMail = (event) => {
    setMail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleRegister = () => {
    if (password === "" || isNaN(Number(password))) {
      alert("La contraseña debe ser numérica")
      return
    }

    fetch("http://localhost:4000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: mail,
        contraseña: Number(password),
        es_admin: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id_usuario) {
          router.push(`/home?id=${data.id_usuario}&nombre=${data.nombre}&es_admin=0`)
        } else {
          alert("Error: " + data.error)
        }
      })
  }

  const irALogin = () => {
    router.push("/login")
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.formulario}>
        <h1 className={styles.titulo}>Crear Cuenta</h1>

        <label className={styles.etiqueta}>Nombre</label>
        <Input onChange={onChangeNombre} placeholder={"Nombre"} value={nombre} />

        <label className={styles.etiqueta}>Apellido</label>
        <Input onChange={onChangeApellido} placeholder={"Apellido"} value={apellido} />

        <label className={styles.etiqueta}>Email</label>
        <Input onChange={onChangeMail} placeholder={"email"} value={mail} type={"email"} />

        <label className={styles.etiqueta}>Contraseña (solo números)</label>
        <Input onChange={onChangePassword} placeholder={"contraseña"} value={password} type={"password"} />

        <Button onClick={handleRegister}>Registrarse</Button>
      </div>

      <div className={styles.cambiarModo}>
        <Button onClick={irALogin}>Ya tenes cuenta? ingresa</Button>
      </div>
    </div>
  )
}