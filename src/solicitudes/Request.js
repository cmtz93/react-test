import React from 'react';
import {
  Card, 
  Badge, Input
} from 'reactstrap';  
import Ionicon from 'react-ionicons';

export default class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: false,
      isDeny: false,
    };
    this.handleOver = this.handleOver.bind(this);
    this.handleLeave = this.handleLeave.bind(this);

    this.handleOverDeny = this.handleOverDeny.bind(this);
    this.handleLeaveDeny = this.handleLeaveDeny.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleOver() {
    this.setState(prevState => ({
      isCheck: true
    }));
  }

  handleLeave() {
    this.setState(prevState => ({
      isCheck: false
    }));
  }

  handleOverDeny() {
    this.setState(prevState => ({
      isDeny: true
    }));
  }

  handleLeaveDeny() {
    this.setState(prevState => ({
      isDeny: false
    }));
  }

  handleKeyPress(e) {
    console.log(e.key);
    if (e.key == 'Enter') {
      this.props.approved();
    }
  }


  render() {
    var classNames = require('classnames');
    const Classes = classNames({
      'Request ': true,
      'animated fadeOutRight': this.props.request.approved,
      'animated fadeOutLeft': this.props.request.approved === false,
      'd-none': !this.props.request.show
    });
    return (      
      <Card body color="light" className={ Classes }>
        <div className="row align-items-center">
          <div className="Deny-button flex" onMouseOver={ this.handleOverDeny } onMouseLeave={this.handleLeaveDeny } onClick={ this.props.dening }>
            <Ionicon icon="md-close" fontSize="33px" color={ this.state.isDeny ? '#fff' : '#D20F36'} />
          </div>
          <div className="col pl-0">
            <strong>{ this.props.request.name }</strong>
            <div className="clearfix"></div>
            <span><span>CUIT:</span> { this.props.request.ciut }</span>
          </div>
          <div className="flex w-100 Request-medium">          
            <span>N° de establecimineto:</span>
            <strong>{ this.props.request.num_loc }</strong>
            <Badge className="px-1" color="secondary"> {
              new Intl.DateTimeFormat('es-AR', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
              }).format(this.props.request.created_at) }
            </Badge>
          </div>
          <div className="Form-request flex w-100">
            <Input type="text" name="terminal" value={ this.props.request.terminal } placeholder="N° de Terminal" onKeyPress={this.handleKeyPress}/>
          </div>          
          <div className="Accept-button flex" onMouseOver={this.handleOver} onMouseLeave={this.handleLeave} 
            onClick={ this.props.approved }>
            <Ionicon icon="md-checkmark-circle" fontSize="40px"
                color={ this.state.isCheck ? '#23C324' : '#C3C3C3' } />
          </div>
        </div>
      </Card>
    );
  }
}
