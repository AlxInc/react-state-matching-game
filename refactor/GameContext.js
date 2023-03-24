import React from 'react'

const GameContect = React.createContext({
    numTiles: 36,
    player: false,
    handleNumTileChange: () => {},
    startPlaying: () => {}
})

export default GameContext