import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}


const Square =( {children, isSelected,updateBoard,index,}) => {
  const className =`square ${ isSelected ? 'is-selected' : ''}`
  
  const handleClick =() =>{
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)
  //NULL NOI HAY GANADOR, FALSE EMPATE
  const [winner,setWinner] = useState(null)

  const checkWinner = (boardToCheck)=>{
    //revisamos todas las combinaciones ganadoras
    //para ver si x o u ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] && //0-> x u o
        boardToCheck[a] === boardToCheck[b] &&//x e x U o e o
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

  const updateBoard = (index)=>{
    // NO ACUTALIZAR POSICION
    if (board[index]|| winner) return
    //update tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
      alert(`El ganador es ${newWinner}`)
    }

  }
  return (
    <main className="board">
      <h1>Tic tac</h1>
      <section className="game">
        {
          board.map((_, index)=>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
                </Square>

            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X} 
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O} 
        </Square>

      </section>
    </main>
  )
}
export default App