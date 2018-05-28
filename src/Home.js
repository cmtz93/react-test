import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import {
	Card, CardTitle, CardBody, 
	Input, Label, Form, FormGroup
} from 'reactstrap';


class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<div  className="Head">
      		<h1>Bienvenido.</h1>
      		<div className="Logo">
      			<img src="images/logo.jpg" alt="Logo"/>
      			<span>Solicitudes</span>
      		</div>
      		<div className="Form-head">
      			<input type="text" placeholder="Introduce tu nombre"/>
      			<span>
      	      <Ionicon icon="md-arrow-forward" fontSize="33px" color="#fff"/>
      			</span>
      		</div>
      		<img src="images/tdc.jpg" alt="Tarjeta"/>

      	</div>
				<Card className="float-form">
		        <CardBody>
		        	<CardTitle>Crea tu primera Solicitud</CardTitle>
		        	<Form>
	              <FormGroup>
	                <Label for="name">Razón Social</Label>
	                <Input type="text" name="name" id="name" placeholder="Razón social el comercio" />
	              </FormGroup>                  
                <FormGroup>
                  <Label for="cuit">Número de CUIT</Label>
                  <Input type="text" name="cuit" id="cuit" placeholder="ej: 54654 - 54654" />
                </FormGroup>                  
                <FormGroup>
                  <Label for="num_loc">Número de establecimiento</Label>
                  <Input type="text" name="num_loc" id="num_loc" placeholder="ej: 545566-0" />
                </FormGroup>  
            	</Form>
		        </CardBody>
		        <button className="card-footer">
		        	Crear solicitud
		        </button>
	      </Card>
      	<div className="Body">
      		<h1>Comienza a aprobar números de establecimiento</h1>
      		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quis orci eget pharetra. Pellentesque lacinia ultrices arcu, quis pulvinar eros iaculis in. Duis ut aliquam felis.</p>
					<p>Donec ut tellus et leo vestibulum lobortis. Aenean dignissim varius est, nec porttitor augue aliquam vitae. Vivamus placerat nunc eu placerat maximus. Morbi tincidunt nunc eu elit porta, vel consequat leo varius. Vivamus vel ornare odio, eget feugiat purus. Aliquam erat volutpat. Vivamus a est blandit, rutrum mauris convallis, facilisis sem. Pellentesque pellentesque nunc at ligula lacinia, eget porttitor mauris aliquet. Fusce non felis convallis, ultricies purus at, faucibus nisi. Sed nibh lorem, sodales ut justo sed, rutrum cursus enim. Quisque nec nibh non mi accumsan finibus. Nam iaculis eget justo pharetra finibus.</p>
      	</div>
      </div>
    );
  }
}

export default Home;
