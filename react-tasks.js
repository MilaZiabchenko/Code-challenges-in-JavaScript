// Santa wish list form in ReactJS
import { Component } from 'react';

class WishlistForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', wish: '', priority: 1 };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleWishChange = this.handleWishChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleWishChange(e) {
    this.setState({ wish: e.target.value });
  }

  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.send(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          id='name'
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <textarea
          id='wish'
          value={this.state.wish}
          onChange={this.handleWishChange}
        />
        <select
          value={this.state.priority}
          id='priority'
          onChange={this.handlePriorityChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </form>
    );
  }
}

// Control the Beast (controlled components in ReactJS)
class Beast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name === undefined ? 'Yeti' : props.name,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.name}
        onChange={this.handleChange}
        id='controlledName'
      />
    );
  }
}
