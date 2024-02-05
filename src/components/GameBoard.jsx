import { useState } from "react"

const boardLayout = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard(){

    const [gameBoard, setGameBoard] = useState(boardLayout)

    function handlePlayerClick(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = 'X'
            return updatedBoard
        })
    }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handlePlayerClick(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )

};

export default GameBoard