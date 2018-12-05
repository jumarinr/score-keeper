import React from "react"; //Importamos react de node_modules
import TitleBar from "./TitleBar"; //Importamos la clase TitleBar desde imports - ui - TitleBar.js
import AddPlayer from "./AddPlayer"; //Importamos la clase AddPlayer desde imports - ui - AddPlayer.js
import PlayerList from "./PlayerList"; //Importamos la clase PlayerList desde imports - ui - PlayerList.js
export default class App extends React.Component {
  //extendemos la clase app a un componente de react
  render() {
    //usamos la funcion render de react para leer jsx
    //retornamos todo
    return (
      <div>
        {" "}
        {/*Usamos el componente TitleBar que ya importamos antes*/}
        <TitleBar
          title={this.props.title}
          subtitle={"Created by Juan Diego"}
        />{" "}
        {/*Llamamos la propiedad title que esta en main.js, sin this.props. no podriamos hacer referencia de esta*/}
        {/*Usamos el componente PlayerList*/}
        <div className="wrapper">
          <PlayerList className="wrapper" players={this.props.players} />{" "}
          {/*lo mismo que arriba pero con players*/}
          {/*usamos el componente AddPlayer*/}
          <AddPlayer />
        </div>
      </div>
    );
  }
}
