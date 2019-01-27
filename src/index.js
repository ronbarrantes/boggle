import React from "react";
import ReactDOM from "react-dom";
import superagent from "superagent";

import Game from "./components/game";
import WordList from "./components/word-list";

import "./styles.css";

const apiURL =
  "https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { wordList: [], isValid: false };
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete(word) {
    console.log("WORD --> ", word);
    // checking if it's a legit word
    // superagent
    //   .post(apiURL)
    //   .send({ word: word })
    //   .then(res => JSON.parse(res.text))
    //   .then(val => console.log(val));

    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify({ word }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => console.log(res));

    this.setState({ wordList: [...this.state.wordList, word] });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>hello World</h2>
        <Game onComplete={this.handleComplete} />
        <WordList wordList={this.state.wordList} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
