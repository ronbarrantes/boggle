import React from 'react'

const LetterItem = (props) =>  {

  const handleClick = () =>{
    console.log('IS_ACTIVE', props.isActive)
    props.toggleActive()
    props.setLetter(props.letterId)
  }

  const handleMouseEnter = () => {
    props.setLetter(props.letterId)
  }

  const liClass = ['letter-item', props.isVisited && 'visited'].join(' ')
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

export default LetterItem

