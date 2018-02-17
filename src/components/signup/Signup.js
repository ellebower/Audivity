import React from 'react';
import './Signup.css';

var Input = React.createClass({
  render: function() {
    return (
      <div className="Input">
        <input
          id={this.props.name}
          autoComplete="false"
          required
          type={this.props.type}
          placeholder={this.props.name}></label>
        />
        <label htmlFor={this.props.name}></label>
      </div>
    );
  }
});

var Modal = React.createClass( {
  render: function() {
    return (
      <div className="modal">
        <form
          onSubmit={this.props.onSubmit}
          className="ModalForm">
          <Input
            id="firstname"
            type="text"
            placeholder="First Name"/>
          <Input
            id="lastname"
            type="text"
            placeholder="Last Name"/>
          <Input
            id="email"
            type="email"
            placeholder="Email"/>
          <Input
            id="role"
              <select id = "dropdown" ref = {(input)=> this.menu = input}>
                <option value="CEO">N/A</option>
                <option value="Chief Editor">1</option>
                <option value="Marketing Director">2</option>
                <option value="Other">3</option>
              </select>
            type="text"
            placeholder="Role"/>
          <Input
            id="password"
            type="password"
            placeholder="Password"/>
          <ToggleButton
            inactiveLabel={<Yes/>}
            activeLabel={<No/>}
            value={self.state.value}
            onToggle={(value) => {
              self.setState({
                value: !value,
              })
            }} />
          <button>
            Log in <i className="fa fa-fw fa-chevron-right"></i>
          </button>
        </form>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {mounted: false};
  },
  componentDidMount: function() {
    this.setState({mounted: true});
  },
  handleSubmit: function(e) {
    this.setState({mounted: false});
    e.preventDefault();
  },
  render: function() {
    var child;
    if(this.state.mounted){
      child = (<Modal onSubmit={this.handleSubmit} />);
    }
    return (
      <div className="App">
          {child}
      </div>
    );
  }
});
export default App;
