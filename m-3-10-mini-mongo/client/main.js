import React from "react"; //Importamos React desde el node_modules
import ReactDOM from "react-dom"; //Importamos ReactDOM desde el node_modules
import { Meteor } from "meteor/meteor"; //Importamos meteor desde meteor
import { Tracker } from "meteor/tracker"; //Importamos Tracker desde meteor

import { Players, calculatePlayerPositions } from "./../imports/api/players"; //Importamos la collecion players desde imports/api/players
import App from "../imports/ui/App";

Meteor.startup(() => {
  Tracker.autorun(() => {
    //obtenemos la coleccion y siempre se refresca, gracias al Tracker, dicha coleccion se almacena en let players
    let players = Players.find({}, { sort: { score: -1 } }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = "Score Keep"; //guardamos el titutlo en la variable para llamar despues, esto fue a modo de practica porque facilmente lo pudimos haber puesto directamente en TitleBar
    // 1) Renderizamos la app principal en el client / main.js.
    /* 2)hacemos referencia a title y players para que desde otros componentes se pueda acceder a estos
    por un this.props.title o this.props.players, luego buscamos en client/maint.html un id llamado app
    y lo reemplazamos por nuestra app*/
    ReactDOM.render(
      <App title={title} players={positionedPlayers} />,
      document.getElementById("app")
    );
  });
});
