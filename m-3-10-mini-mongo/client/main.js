import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players } from "./../imports/api/players";

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
      </p>
    );
  });
};
const handleSubmit = function(event) {
  event.preventDefault();
  let playerName = event.target.playerName.value;
  if (playerName) {
    let name = event.target.playerName.value;
    Players.insert({
      name: name,
      score: 0
    });
  }
};
Meteor.startup(function() {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let title = "Score Keep";
    let name = "Mike";
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});
