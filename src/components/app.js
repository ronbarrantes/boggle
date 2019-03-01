import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initBoard } from '../actions/board'


import Board from './board'
import WordList from './word-list'
import '../styles.css'

const App = (props) => {


  // const [errorMessage, setErrorMessage ] = useState('')

  useEffect(()=>
    props.initBoard(), []
  )


    return (
      <div className="App">
        <h1>Boggle</h1>
        {/* <p className='error'>{errorMessage}</p> */}
        <Board/>
        <WordList title={'Valid Words'} wordList={props.validWords} />
        <WordList title={'Invalid Words'} wordList={props.invalidWords} />
      </div>
    )
  
}

const mapStateToProps = state => ({
  validWords: state.wordList.validWords,
  invalidWords: state.wordList.invalidWords,
})

const mapDispatchToProps = {
  initBoard,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)