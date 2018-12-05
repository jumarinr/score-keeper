import { Meteor } from "meteor/meteor";
import { Players } from "./../imports/api/players";

Meteor.startup(() => {
  let obj = {
    name: "Juan",
    printname() {
      console.log(`Name: ${this.name}`);
    }
  };
  setTimeout(obj.printname.bind(obj), 1000);
  //obj.printname();
});
