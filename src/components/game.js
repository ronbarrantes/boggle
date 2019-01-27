import React, { Component } from "react";

const emptyState = {
  word: "",
  isActive: false
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ word: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state.word);
    // this.setState({ word: "hello" });
  }

  render() {
    const { word } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="word"
          value={word}
          onChange={this.handleChange}
        />
        <button type="submit">Check</button>
      </form>
    );
  }
}

export default Game;
