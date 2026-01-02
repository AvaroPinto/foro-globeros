import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("Cargando...");

  useEffect(() => {
    fetch("http://localhost:3001/api/health")
      .then((r) => r.json())
      .then((d) => setMsg(d.message))
      .catch(() => setMsg("No conecta con la API"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Foro Bicicletas</h1>
      <p>API: {msg}</p>
    </div>
  );
}
