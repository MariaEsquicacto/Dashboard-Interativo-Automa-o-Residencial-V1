import React from "react";
import { Link } from 'react-router-dom';

export default function Casa() {
  return (
    <main className="casainicial">
      <div className="conteiner">
        <div className="telhado"></div>
        <div className="casa">
          <div className="cards">
            <Link to="/quarto" className="comodos quarto">
              <h1>Quarto</h1>
            </Link>
            <Link to="/sala" className="comodos sala">
              <h1>Sala</h1>
            </Link>
            <Link to="/banheiro" className="comodos benheiro">
              <h1>Banheiro</h1>
            </Link>
            {/* Aqui adicionamos o Link para navegar */}
            <Link to="/cozinha" className="comodos cozinha">
              <h1>Cozinha</h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
