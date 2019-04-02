

const middle = ({ getState }) => next => action => {

  console.log('+STATE::',action, 'isBoardActive', getState().board.isBoardActive,)
  next(action)
}

export default middle