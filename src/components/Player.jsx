import {useState} from "react";
export default function Player( { name, symbol }){
    const [ isEditing, setIsEditing ] = useState(false);
    const [ name, setName ] = useState('Player 1')
    return  (
        <li>
              <span className='player'>
                <span className='palyer-name'>{name}</span>
                <span className="player-symbol">{symbol}</span>
              </span>
            <button>Edit</button>
        </li>
    );
}