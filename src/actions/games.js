import api from '../api/games'
import * as types from '../constants/ActionTypes'

const getGames = games => ({
  type: types.GAMES_LOADED,
  games: games
})

export const getMyGames = () => dispatch => {
  return api.getGames(games => {
    console.log(games);
    dispatch(getGames(games))
  })
}