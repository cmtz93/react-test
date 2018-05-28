import React from 'react';
import Request from './Request'
import ConfirmDeny from './ConfirmDeny'

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.toggleConfirming = this.toggleConfirming.bind(this);
    this.reject = this.reject.bind(this);
    //this.approved = this.approved.bind(this);

    this.state = {
      isOpen: false,
      confirming: false,
      indexEditing: undefined,
      indexApproved: undefined,      
      requests : [
        {
          id: 1,
          name: 'Carlos Martinez',
          ciut: '33-12345678-0',
          num_loc: '1234567890',
          created_at: new Date(2018,6,15),
          terminal: undefined,
          approved: undefined,
          show: true,
        },
        {
          id: 2,
          name: 'Carlos Martinez',
          ciut: '33-12345678-0',
          num_loc: '1234567890',
          created_at: new Date(2018,6,12),
          terminal: undefined,
          approved: undefined,
          show: true,
        },
        {
          id: 1,
          name: 'Carlos Martinez',
          ciut: '33-12345678-0',
          num_loc: '1234567890',
          created_at: new Date(2018,6,15),
          terminal: undefined,
          approved: undefined,
          show: true,
        },
        {
          id: 2,
          name: 'Carlos Martinez',
          ciut: '33-12345678-0',
          num_loc: '1234567890',
          created_at: new Date(2018,6,12),
          terminal: undefined,
          approved: undefined,
          show: true,
        },
        {
          id: 1,
          name: 'Carlos Martinez',
          ciut: '33-12345678-0',
          num_loc: '1234567890',
          created_at: new Date(2018,6,15),
          terminal: undefined,
          approved: undefined,
          show: true,
        },
        {
          id: 2,
          name: 'Carlos Martinez',
          ciut: '33-12345678-0',
          num_loc: '1234567890',
          created_at: new Date(2018,6,12),
          terminal: undefined,
          approved: undefined,
          show: true,
        },
      ]
    };
  }

  toggleConfirming (e) {
    e.preventDefault();
    this.setState((prevState) => ({
      confirming: !prevState.confirming
    }));
  }

  dening (index) {
    const nextValue = index;
    this.setState({ confirming: true , indexEditing: nextValue });
  }

  approved (index) {   
  console.log('approved');  
    var newValues = this.state.requests;
    newValues[index].approved = true;
    this.setState((prevState) => ({
      requests: newValues,
      confirming: false,
    }));
    setTimeout(()=> {
        newValues[index].show = false;
        this.setState({
          requests : newValues,
          indexEditing: undefined,
        })
      },1000 );
  }

  reject (e) {
    e.preventDefault();
    var newValues = this.state.requests;
    newValues[this.state.indexEditing].approved = false;
    this.setState((prevState) => ({
      requests: newValues,
      confirming: false,
    }));
    setTimeout(()=> {
        newValues[this.state.indexEditing].show = false;
        this.setState({
          requests : newValues,
          indexEditing: undefined,
        })
      },1000 );
  }

  render() {    
    return (
      <div className="container mt-0">
        <div className="row justify-content-center">
          {this.state.requests.map((item,index) => (
            <Request key={index} request={ item } dening={ this.dening.bind(this, index) }  approved={ this.approved.bind(this, index) }/>
          ))}
          <ConfirmDeny confirming={ this.state.confirming } close={ this.toggleConfirming} reject={ this.reject }/>
        </div>
      </div>
    );
  }
}
