import React from 'react'
import { connect } from 'react-redux'
import { initBoard } from '../actions/board'


import Board from './board'
import WordList from './word-list'
import '../styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: '',
    }
  }

  componentDidMount(){
    this.props.initBoard()
  }

  render() {
    return (
      <div className="App">
        <h1>Boggle</h1>
        <p className='error'>{this.state.errorMessage}</p>
        <Board/>
        <WordList title={'Valid Words'} wordList={this.props.validWords} />
        <WordList title={'Invalid Words'} wordList={this.props.invalidWords} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  validWords: state.wordList.validWords,
  invalidWords: state.wordList.invalidWords,
})

const mapDispatchToProps = {
  initBoard,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)