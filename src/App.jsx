import { useState } from "react"
import Log from "./components/Log"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}


function App() {

  const activePlayer = deriveActivePlayer(gameTurns)

  const [gameTurns, setGameTurns] = useState([])

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTerns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns];

      return updatedTerns;
    }

    )
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol='X' isActive={activePlayer === 'X'} />
          <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard
          onSelectSquare={handleActivePlayer}
          turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
