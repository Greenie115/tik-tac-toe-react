import { useState } from "react"
import Log from "./components/Log"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import GameOver from "./Game-Over"
import { WINNING_COMBINATIONS } from "./Winning_Combinations"

const boardLayout = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}


function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...boardLayout.map(array => [...array] )]
  
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square
      gameBoard[row][col] = player
    }

    let winner;

for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = 
    gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = 
    gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = 
    gameBoard[combination[2].row][combination[2].column]
    
    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol){
      }
      winner = firstSquareSymbol
    }  

    const handleRestart = () => {
      setGameTurns([])
    }

    const hasDraw = gameTurns.length === 9 && !winner

  function handleActivePlayer(rowIndex, colIndex) {
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
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard
          onSelectSquare={handleActivePlayer}
          board={gameBoard}
           />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
