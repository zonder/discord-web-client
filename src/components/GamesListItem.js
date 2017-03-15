import React, { PropTypes } from 'react'

const GamesListItem = ({ gameItem }) => (
  <div style={{ marginBottom: 20 }}>
    <span>{gameItem.name}</span>
    <button>Ok</button>
  </div>
)

export default GamesListItem