const boardLayout = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard(){
    return(
        <ol id="game-board">
            {boardLayout.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )

};

export default GameBoard