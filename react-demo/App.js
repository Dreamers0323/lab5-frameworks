import React, { useState } from "react";

function WelcomeMessage({ name }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p>This is a toggleable message 🎉</p>}
    </div>
  );
}

export default function App() {
  return <WelcomeMessage name="Student" />;
}
