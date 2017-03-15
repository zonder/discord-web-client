import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { getMyGames } from '../actions/games'
import { gamesReducer } from '../reducers/games'

import GamesListItem from '../components/GamesListItem'
import GamesList from '../components/GamesList'

const GamesListContainer = ({ games }) => (
  <GamesList title="Games">
    {games.map(game =>
      <GamesListItem
        key={game.id}
        game={game}
        />
    )}
  </GamesList>
)

GamesListContainer.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
}

const mapStateToProps = state => 
    {
        console.log(state);
    return {
  games: gamesReducer(state.games)
}};


export default connect(
  mapStateToProps,
  { getMyGames }
)(GamesListContainer)