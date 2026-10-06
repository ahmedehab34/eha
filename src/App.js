import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "sans-serif" }}>
      <h1>Hello from my Dockerized React app!</h1>
      <p>Built with a multi-stage Docker build and served by nginx.</p>
    </div>
  );
}

export default App;
