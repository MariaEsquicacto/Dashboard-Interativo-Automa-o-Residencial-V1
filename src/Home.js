import React, { useContext } from 'react';
import { ResidenciaContext } from './context/ResidenciaContext';

function Home() {
  const { state } = useContext(ResidenciaContext);

  if (state.carregando) return <p>Carregando dados...</p>;
  if (state.erro) return <p>Erro: {state.erro}</p>;

  return (
    <div>
      <h1>Dados da Residência</h1>
      <pre>{JSON.stringify(state.dados, null, 2)}</pre>
    </div>
  );
}

export default Home;
