  const handleLogin = () => {
    fetch("http://localhost:4000/usuarios")
      .then((response) => response.json())
      .then((data) => {
        const usuario = data.find(
          (u) => u.email === mail && u.password === password
        )

        if (usuario) {
          router.push(`/home?id=${usuario.id_usuario}&nombre=${usuario.nombre}&rol=${usuario.rol}`)
        } else {
          alert("Email o contraseña incorrectos")
        }
      })
  }