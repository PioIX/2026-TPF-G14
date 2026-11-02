"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [busqueda, setBusqueda] = useState("")

  const id = searchParams.get("id")
  const nombre = searchParams.get("nombre")
  const es_admin = searchParams.get("es_admin")

  const params = `id=${id}&nombre=${nombre}&es_admin=${es_admin}`

  const links = [
    { id: 1, texto: "Inicio", ruta: "/home" },
    { id: 2, texto: "Deportes", ruta: "/home/deportes" },
    { id: 3, texto: "Equipos", ruta: "/home/equipos" },
    { id: 4, texto: "Jugadores", ruta: "/home/jugadores" },
    { id: 5, texto: "Competencias", ruta: "/home/competencias" },
  ]

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value)
  }

  // Con un <form> también se puede buscar apretando Enter
  const handleBuscar = (event) => {
    event.preventDefault()
    if (busqueda.trim() === "") {
      return
    }
    router.push(`/home/buscar?q=${encodeURIComponent(busqueda.trim())}&${params}`)
  }

  return (
    <header className={styles.header}>
      <div className={styles.superior}>
        <div className={styles.logo}>
          <span className={styles.nombreLogo}>PioZone</span>
        </div>

        <form className={styles.buscador} onSubmit={handleBuscar}>
          <Input onChange={onChangeBusqueda} placeholder={"Buscar deportes, equipos..."} value={busqueda} type={"text"} />
          <Button type={"submit"}>Buscar</Button>
        </form>
      </div>

      <nav className={styles.nav}>
        {links.map((link) => (
          <Link key={link.id} href={`${link.ruta}?${params}`} className={styles.link}>
            {link.texto}
          </Link>
        ))}

        {es_admin === "1" && (
          <Link href={`/home/admin?${params}`} className={styles.link}>
            Administración
          </Link>
        )}
      </nav>
    </header>
  )
}