import {UPDATE_RECIPE} from '../actions/recipes/update'
import {CREATE_RECIPE} from '../actions/recipes/create'
// import { TOGGLE_LIKE } from '../actions/recipes/toggle-like'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'
import recipes from '../fixtures/recipes'

export default (state = recipes, {type, payload} = {}) => {
  switch(type) {
    case FETCHED_RECIPES :
      return [].concat(payload)

    case CREATE_RECIPE :
      return [{ ...payload }].concat(state)

    case UPDATE_RECIPE:
    return state.map((recipe) => {
      if (recipe._id === payload._id) return { ...recipe, ...payload}
      return recipe
    })
    default:
      return state
  }
}
