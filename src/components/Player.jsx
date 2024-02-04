function Player({name, symbol}){
    return(
        <>
        <li>
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </li>
      <button>Edit</button>
      </>
    )
}

export default Player;