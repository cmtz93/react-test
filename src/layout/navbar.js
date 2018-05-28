import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';  
import Ionicon from 'react-ionicons'
import CreateRequest from '../solicitudes/CreateRequest'

export default class Topbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleModal(e) {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="py-0">
          <NavbarBrand href="/" className="navbar-brand text-muted">
            <img src="../images/visaLogo.png" alt="Logo"/>
            <span>Solicitudes</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" className="text-primary pr-1" onClick={this.toggleModal }>
                  <Ionicon icon="md-add" fontSize="33px" style={{verticalAlign:'middle'}} color="#005B9C" /> Crear solicitud
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <CreateRequest modal={this.state.modal} toggleModal={this.toggleModal} />
      </div>
    );
  }
}
