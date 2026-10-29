import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function useSocket({ serverUrl = "ws://localhost:4000" } = {}) {
  // Se crea una sola vez y solo en el navegador (en el servidor de Next queda en null).
  // autoConnect: false → la conexión se abre en el useEffect.
  const [socket] = useState(() =>
    typeof window === "undefined" ? null : io(serverUrl, { autoConnect: false })
  );
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!socket) return;

    const onConnect = () => {
      setIsConnected(true);
      console.log("✅ WebSocket conectado:", socket.id);
    };

    const onDisconnect = () => {
      setIsConnected(false);
      console.log("❌ WebSocket desconectado");
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.connect();

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      // Al salir de la página se cierra la conexión para no dejar sockets abiertos
      socket.disconnect();
    };
  }, [socket]);

  return { socket, isConnected };
}
