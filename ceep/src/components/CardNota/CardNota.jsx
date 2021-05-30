import React, { Component } from "react"; //imrc+TAB
import "./estilo.css"

class CardNota extends Component { //CC+TAB
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>
        );
    }
}

export default CardNota;