import React from 'react'

const GameContext = React.createContext({
    numTiles: 36,
    player: false,
    handleNumTileChange: () => {},
    startPlaying: () => {}
})

export default GameContext