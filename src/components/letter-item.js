import React from 'react'
import { connect } from 'react-redux'

import { letter, isTileVisited } from '../reducers'

const LetterItem = (props) =>  {
  const handleClick = () =>{
    console.log(`HANDLE CLICK`)
    // console.log('IS_ACTIVE', props.isBoardActive)
    // props.toggleActive()
    // props.setLetter(props.tileId)
  }

  const handleMouseEnter = () => {
    console.log('HANDLE MOUSE EVENT')
    // props.setLetter(props.tileId)
  }


  const liClass = ['letter-item', props.isTileVisited && 'visited'].join(' ')
  return(
    <li
      onClick={handleClick}
      className={liClass}
    >
      <div
        onMouseEnter={handleMouseEnter}>
        {props.letter}
      </div>
    </li>
  )
}

const mapStateToProps = (state, props) => {
  return {
    letter: letter(state, props.tileId),
    isTileVisited: isTileVisited(state, props.tileId),
  }
}

export default connect (mapStateToProps)(LetterItem)

