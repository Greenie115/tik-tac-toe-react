import { useState } from "react";

function Player({ name, symbol }) {

    const [editedPlayerName, setEditedPlayerName] = useState(name)
    const [isEditable, setIsEditable] = useState(false)

    const handleEditPlayer = () => {
        setIsEditable(editable => !editable)
    }

    const handleChange = (event) => {
        setEditedPlayerName(event.target.value)
    }

    return (
        <>
            <li>
                {isEditable ?
                    <>
                        <input
                            className='player-name'
                            type="text"
                            value={editedPlayerName}
                            onChange={handleChange}
                            ></input>
                        <span className="player-symbol">{symbol}</span>
                    </>
                    :
                    <>
                        <span className="player-name">{editedPlayerName}</span>
                        <span className="player-symbol">{symbol}</span>
                    </>
                }
            </li>
            <button
                onClick={handleEditPlayer}
            >{isEditable ? 'Save' : 'Edit'}</button>
        </>
    )
}

export default Player;