import React from "react";
import {Link} from 'react-router-dom';

export default function Cozinha(){
    return(
        <body className="cozinhabody">
            
        
        <main className="cozinhainicial">
            
            <div class="armario esq"></div>
    <div class="armario dir"></div>
    <div class="saida esqlampada"></div>
    <div class="luz esq"></div>
    <div class="saida dirlampada"></div>
    <div class="luz dir"></div>
    <div class="exaustor"></div>
    <div class="saida"></div>
    <div class="gaveteiro esq"></div>
    {/* <div class="gaveteiro 2"></div> */}
    <div class="gaveteiro dir"></div>
    <div class="fogao">
        <div className="botoes">
            <div className="botaqo"></div>
            <div className="botaqo"></div>
            <div className="botaqo"></div>
            <div className="botaqo"></div>
            <div className="botaqo"></div>
        </div>
        <div class="porta"></div>
    </div>
    <div class="pia"></div>
    <div class="torneira"></div>
            
        </main>
        </body>
    )
}