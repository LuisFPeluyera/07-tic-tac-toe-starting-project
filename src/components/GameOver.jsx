export default function GameOver ({winner}){
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner} won!</p>
            <p>
                <button onClick={()=> location.reload()} >Rematch!</button>
            </p>
        </div>
    );
}