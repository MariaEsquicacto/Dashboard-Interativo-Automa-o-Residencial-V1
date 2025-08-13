import React, {useState} from "react";
import { Link } from "react-router-dom";
import CardArCondicionado from "../components/CardArCondicionado";



  

export default function Sala(){

    const [ac, setAc] = useState({
        id: 1,
        // nome: 'Ar Condicionado Sala',
        estado: { ligado: false, temperatura: 22, modo: 'refrigerar' },
      });
    
      const dispatch = ({ type, payload }) => {
        if (type === 'ATUALIZAR_DISPOSITIVO') {
          const { novoEstado } = payload;
          setAc(prev => ({ ...prev, estado: { ...prev.estado, ...novoEstado } }));
        }
      };
    
      
    
    return(
        <body className="salabody">
            
        
       <main>
         <div class="salainicial">
         <CardArCondicionado dados={ac} comodo="sala" dispatch={dispatch} />
    <div class="luminaria luminaria1"></div>
    <div class="luminaria luminaria2"></div>

    <div class="rack">
      <div class="gaveta"></div>
      <div class="gaveta"></div>
      <div class="gaveta"></div>
    </div>

    <div class="vaso">
      <div class="folhas"></div>
    </div>

    <div class="tv"></div>

    <div class="abajur">
      <div class="base"></div>
      <div class="lampada"></div>
    </div>

    <div class="sofa"></div>
    <div class="quadro"></div>
  </div>
       </main>
       </body>
    )
}