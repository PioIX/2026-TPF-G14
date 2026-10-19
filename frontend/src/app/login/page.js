"use client";

import Input from "@/components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function LoginPage() {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [EsRegistro, setEsRegistro] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [foto, setFoto] = useState(null);

  const onChangefoto = (event) => {
    const archivo = event.target.files[0];
    setFoto(archivo);
  };

  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const onChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const cambiarModo = () => {
    setEsRegistro(!EsRegistro);
  };

  const handleLogin = () => {
    alert('Login')
  };

  const handleRegister = () => {
    alert('Registro')
  };

  return (
    <div >
      {EsRegistro ? (
        <div >
          <label >Nombre</label>
          <Input
            onChange={onChangeNombre}
            placeholder={"Nombre"}
            value={nombre}
          />

          <label >Apellido</label>
          <Input
            onChange={onChangeApellido}
            placeholder={"Apellido"}
            value={apellido}
          />

          <label >Email</label>
          <Input onChange={onChangeMail} placeholder={"email"} value={mail} />

          <label >Contraseña</label>
          <Input
            onChange={onChangePassword}
            placeholder={"contraseña"}
            value={password}
            type={"password"}
          />

          <label >Foto de Perfil</label>
          <input onChange={onChangefoto} type={"file"} accept="image/*" />

          <Button onClick={handleRegister}> Registrarse </Button>
        </div>
      ) : (
        <div>
          <label>Email</label>
          <Input onChange={onChangeMail} placeholder={"email"} value={mail} />

          <label>Contraseña</label>
          <Input
            onChange={onChangePassword}
            placeholder={"contraseña"}
            value={password}
            type={"password"}
          />

          <Button onClick={handleLogin}>Ingresar</Button>
        </div>
      )}

      <div>
        <Button onClick={cambiarModo}>
          {EsRegistro ? "Ya tenes cuenta? ingresa" : "Registrate"}
        </Button>
      </div>
    </div>
  );
}
