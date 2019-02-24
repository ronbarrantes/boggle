
const checkWord = ({getState, dispatch}) => next => action => {
  console.log('checking word')
  next(action)
}

export default checkWord