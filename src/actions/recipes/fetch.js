import API from '../../api'
import loading from '../loading'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch(loading(true))
    const backend = api.service('recipes')
    backend.find()
    .then((result) => {
      dispatch(loading(false))
      console.log(result)
      dispatch({
        type: FETCHED_RECIPES,
        payload: result.data
      })
    })
    .catch((error) => {
      dispatch(loading(false))
      console.log.error(error)
    })
  }
}
