import React from 'react';
import {
  Card
} from 'reactstrap';  
import Ionicon from 'react-ionicons'

export default class ConfirmDeny extends React.Component {

  render() {
    return (
      <Card body color="light" className={ this.props.confirming ? 'ConfirmDeny' : 'invisible'} >
        <div className="row align-items-center">
          <div className="col-1 Button">
            <Ionicon icon="md-close" fontSize="33px" color="#FFF" />
          </div>
          <div className="col border border-danger d-flex">
            <span className="mr-auto">¿Estás seguro de rechazar la solicitud de este comercio ?</span>
            <a href="#" onClick={ this.props.close }>Cancelar</a>
            <a href="#" className="text-danger" onClick={ this.props.reject }><strong>Rechazar</strong></a>
          </div>
        </div>
      </Card>
    );
  }
}
