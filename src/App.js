import React from "react";
import "./styles/main.scss";

/**
 * Composant principal de l\'application
 * @returns {JSX.Element} Élément JSX représentant l\'application
 */
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hello React App</h1>
        <p>Environment: {process.env.NODE_ENV}</p>
      </header>
    </div>
  );
}

export default App;
