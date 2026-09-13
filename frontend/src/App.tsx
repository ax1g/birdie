import { useState, useEffect } from "react";

const App = () => {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.json())
      .then((response) => setMsg(response.message))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <h1>Birdie</h1>

      <p>Health check : {msg}</p>
    </>
  )
}

export default App
