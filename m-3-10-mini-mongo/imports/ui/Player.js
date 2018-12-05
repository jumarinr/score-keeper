import React from "react";
import { Players } from "../api/players";
export default class Player extends React.Component {
  getPoints() {
    let currentScore = this.props.player.score;
    console.log(currentScore);
    if (currentScore == 1 || currentScore == -1) {
      return <p>{this.props.player.score} punto</p>;
    } else {
      return <p>{this.props.player.score} puntos</p>;
    }
  }
  render() {
    return (
      <div key={this.props.player._id} className="item">
        <div className="player">
          <div>
            {" "}
            <h3 className="player__name"> {this.props.player.name} </h3>{" "}
            {/* asignamos una key para cada p del documento html, dicha key es el identificador de cada documento en mongo, asi que es unica */}
            {/*con this.props hago referencia al player que esta en main.js*/}
            {this.props.player.position}
            <p className="player__stats">{this.getPoints(this)}.</p>
          </div>
          <div className="player__actions">
            {/* desde player.name obtenemos el valor del nombre, que esta en el documento, lo mismo con player.score*/}
            {/*Al hacer click invoca la funcion de flecha*/}
            <button
              className="button button--round"
              onClick={
                () =>
                  Players.update(
                    { _id: this.props.player._id },
                    { $inc: { score: 1 } }
                  )
                //Para editar la coleccion de mongo sin tener que restablecer todos los valores se hace un update del valor a modificar,que en este caso es la score, este boton suma un punto
              }
            >
              +1
            </button>
            <button
              className="button button--round"
              onClick={
                () =>
                  Players.update(
                    { _id: this.props.player._id },
                    { $inc: { score: -1 } }
                  )
                //Lo mismo que en el boton de arriba, pero esta funcion edita el score y le va restando de a 1, lo hacen gracias de la funcion de mongo $inc
              }
            >
              -1
            </button>
            <button
              className="button button--round"
              onClick={() => {
                // creo una variable "confirmar" que me regrese un boolean
                let confirmar = confirm(
                  "¿Esta seguro que quiere borrar la seleccion?"
                );
                //si le doy aceptar, borro el documento de la coleccion
                if (confirmar) {
                  Players.remove(this.props.player._id);
                  //Con esta funcion que se ejecuta al pulsar el boton removemos el documento ESPECIFICO de la coleccion de mongo
                }
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
