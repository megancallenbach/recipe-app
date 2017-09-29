import { LOAD_ERROR, LOAD_SUCCESS } from '../actions/errors'

export default (state = null, { type } = {}) => {
  switch(type) {
    case LOAD_ERROR :
      return { ...payload }
    case LOAD_SUCCESS :
      return null
    default :
      return state
  }
}
