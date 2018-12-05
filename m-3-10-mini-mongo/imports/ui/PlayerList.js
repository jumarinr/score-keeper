import React from "react"; //Importamos react de node_modules
import FlipMove from "react-flip-move";
import Player from "./Player"; //Importamos el componente Player de imports - ui - Player

//exportamos la clase PlayerList como componente de react
export default class PlayerList extends React.Component {
  /* creamos la funcion renderPlayers que lo que hace es renderizar todos los jugadores obteniendo
  como parametro la coleccion que esta en client - main.js */
  renderPlayers() {
    /*si la collecion esta vacia, se dara un mensaje en la pagina por medio de la etiqueta <p>
    accede a la coleccion a traves de client/main.js:12:5 letplayer Y llama al let players por medio
    del this.props*/
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          {" "}
          <p className="item__message">Agrega un jugador para empezar</p>
        </div>
      );
    } else {
      /* si no esta vacia, simplemente va a MAPEAR los documentos de la coleccion, tomando como parametro
      player, que sera cada documento, luego coje varios atributos de este documento para poder visualizar
      en la pagina, ES CLAVE la key que es el que nos permite borrar un elemento especifico,
      asi tengan igual nombre, la id es unica y es dada por mongo*/
      return this.props.players.map(player => {
        /*Usamos el componente Player, que lo que hace es recibir player._id y player,
        para dar a visualizar a la pagina*/
        return <Player key={player._id} player={player} />;
      });
    }
  }

  render() {
    //renderizamos la funcion renderPlayers
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}
PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
