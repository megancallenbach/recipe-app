import { expect } from 'chai'
import reducer from './recipes'
import freeze from 'deep-freeze-node'
import recipes from '../fixtures/recipes'
import { UPDATE_RECIPE } from '../actions/recipes/update'

describe('Recipes Reducer', () => {
  const actualState = reducer()
  const initialState = freeze(recipes)

  it('the initial state is an array', () => {
    expect(actualState).to.eql(initialState)
  })

  describe(UPDATE_RECIPE, () => {
    const action = freeze({
      type: UPDATE_RECIPE,
      payload: { _id: 'abcd123', liked: true }
    })
    const newState = reducer(recipes ,action)

    it('updates the recipe with the same _id', () => {
      expect(newState[0].liked).to.eq(true)
    })
  })
})
