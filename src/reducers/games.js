import * as types from '../constants/ActionTypes'

export const gamesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case types.GAMES_LOADED:
    console.log(action.games)
      return action.games;
      
    default:
      return state
  }
}

export default gamesReducer