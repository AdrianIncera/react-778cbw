import React from 'react';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.icono = props.icono;
    this.titulo = props.titulo;
  }

  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
      </div>
    );
  }
}
export default ListaClase;
