import React from "react"; //Importamos React desde node_modules

//exportamos la clase TitleBar
export default class TitleBar extends React.Component {
  renderSubtitle() {
    //Esta funcion es para adicionar creador, en este caso solo esta como modo de practica
    if (this.props.subtitle) {
      return (
        <div className="title-bar__subtitle">
          <h4>{this.props.subtitle}</h4>
        </div>
      );
    }
  }
  render() {
    //vamos a renderizar el titulo que dejamos en client/main.js
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}
TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};
TitleBar.defaultProps = {
  title: "Default title"
};
