import React from "react"; //importamos React de node_modules

import { Players } from "../api/players"; //importamos la coleccion

export default class AddPlayer extends React.Component {
  handleSubmit(event) {
    event.preventDefault(); //prevenimos que se refesque la pagina al subir un player
    let playerName =
      event.target.playerName
        .value; /*obtenemos a traves del evento,
    el valor que el usuario nos suministra al hacer el submit*/
    if (playerName) {
      //Si no esta vacio playerName
      event.target.playerName.value = ""; //vaciamos la celda
      //insertamos en la coleccion el valor suministrado y una score por defecto que seria 0
      Players.insert({
        name: playerName,
        score: 0 //this.props.score
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          {" "}
          {/*Si yo tuviera algo como score={10} en mi main, DEBO PONER EL .BIND(this) para que no pierda
         la referencia del objeto a importar.*/}
          <input
            className="form__input"
            type="text"
            name="playerName"
            placeholder="Player name"
            required="true"
          />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
