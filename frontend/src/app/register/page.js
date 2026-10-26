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
  const [foto, setFoto] = useState(null)

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

  const onChangeFoto = (event) => {
    const archivo = event.target.files[0]
    setFoto(archivo)
  }

  const handleRegister = () => {
    fetch("http://localhost:4000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: mail,
        password: password,
        foto: null,
        rol: "usuario",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id_usuario) {
          router.push(`/home?id=${data.id_usuario}&nombre=${data.nombre}`)
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

        <label className={styles.etiqueta}>Contraseña</label>
        <Input onChange={onChangePassword} placeholder={"contraseña"} value={password} type={"password"} />

        <label className={styles.etiqueta}>Foto de Perfil</label>
        <input onChange={onChangeFoto} type={"file"} accept="image/*" />

        <Button onClick={handleRegister}>Registrarse</Button>
      </div>

      <div className={styles.cambiarModo}>
        <Button onClick={irALogin}>Ya tenes cuenta? ingresa</Button>
      </div>
    </div>
  )
}