import React, { PropTypes } from 'react'

const GamesList = ({ title, children }) => (
  <div>
    <div>{children}</div>
  </div>
)

GamesList.propTypes = {
  children: PropTypes.node,
}

export default GamesList