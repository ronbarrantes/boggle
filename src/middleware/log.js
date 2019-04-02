const logMiddleware = ({ getState , dispatch }) => (next) => (action) => {
  console.log('Action:', action)
  // console.log('--------')
  next(action)
}

export default logMiddleware