

const middle = ({ getState }) => next => action => {

  console.log('+STATE::',action, 'isActive', getState().board.isActive,)
  next(action)
}

export default middle