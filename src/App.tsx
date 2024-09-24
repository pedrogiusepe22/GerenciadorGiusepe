import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/login"; // Certifique-se de que o caminho está correto
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Gerenciador from "./pages/gerenciador"; // Importar o Gerenciador

function App() {
  const renderizarBotoes = () => (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/gerenciador">Gerenciador/Dashboard</Link></li> {/* Adicionado o link para Gerenciador */}
        </ul>
      </nav>
    </div>
  );

  return (
    <Router>
      {renderizarBotoes()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/gerenciador" element={<Gerenciador />} /> {/* Adicionando a rota para o Gerenciador */}
      </Routes>
    </Router>
  );
}

export default App;
