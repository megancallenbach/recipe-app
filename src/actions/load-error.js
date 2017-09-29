export const LOAD_ERROR = 'LOAD_ERROR'

export default (errors) => ({
  type: LOAD_ERROR,
  payload: { errors }
})
