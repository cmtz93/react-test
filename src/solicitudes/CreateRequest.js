
import React from 'react';
import { 

  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input, Row, Col
} from 'reactstrap';

class CreateRequest extends React.Component {
  
  render() {
    return (
        <Modal isOpen={ this.props.modal } toggle={ this.props.toggleModal } >
          <ModalHeader toggle={ this.props.toggleModal } className="text-center">Crear solicitud</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Razón Social</Label>
                <Input type="text" name="name" id="name" placeholder="ej: Nexus S.A." />
              </FormGroup>
              <Row>
                <Col sm={6}>                    
                  <FormGroup>
                    <Label for="cuit">Número de CUIT</Label>
                    <Input type="text" name="cuit" id="cuit" placeholder="00-0000000-0" />
                  </FormGroup>
                </Col>
                <Col sm={6}>                    
                  <FormGroup>
                    <Label for="num_loc">Número de establecimiento</Label>
                    <Input type="text" name="num_loc" id="num_loc" placeholder="0000000-0" />
                  </FormGroup>
                </Col>
              </Row>         
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline className="w-50" block onClick={this.props.toggleModal }>Cancelar</Button>
            <Button color="primary" className="w-50 my-0" block onClick={this.props.toggleModal }>Crear</Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default CreateRequest;