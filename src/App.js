//useState that you can call from your component to let it “remember”
import { useState } from 'react';


function Square({value , onSquareClick}) {

  //const[value , setValue] = useState(null); //value stores the value and setValue is a function that can be used to change the value, null : value starts with null
  //function handleClick()
  //{
   // console.log('clicked!');
  // setValue('X');
  //}
  
  return  (
    <button className="square" onClick={onSquareClick}>
    {value}
  </button>
);
}

export default function Board()  //defines a function Square //default keyword tells its the main function of the file
{
  const [xIsNext, setXIsNext] = useState(true); //xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved
  const [squares, setSquares] = useState(Array(9).fill(null));

//handClick function is defined\
//You will call calculateWinner(squares) in the Board component’s handleClick function to check if a player has won.
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    
    const nextSquares = squares.slice(); //handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method.
    if(xIsNext)
    nextSquares[i] ='X' ;////handleClick updates the nextSquares array to add X to the first ([0] index) square.
    else
    nextSquares[i] = 'O' ;
      
    setSquares(nextSquares); //Calling the setSquares function lets React know the state of the component has change
    setXIsNext(!xIsNext);
  
  }


  //to declare who is the winner

  const winner = calculateWinner(squares);
  let status;
  if (winner) 
  {
    status = "Winner of the game: " + winner;
  }
   else 
   {
    status = "Next player: " + (xIsNext ? "X" : "O");
   }

  return (
    <> 
     <div className="status">{status}</div> 
    <div className="board-row">
        <Square value ={squares[0]} onSquareClick={() => handleClick(0)} />  {/*defining nine different functions and giving each of them a name is too verbose    */}                         {/* <button className ="square" > X </button> */}
        <Square value ={squares[1]} onSquareClick={() => handleClick(1)}  />                     {/*<button className ="square" > X </button> */}
        <Square value = {squares[2]} onSquareClick={() => handleClick(2)}  />                        {/*}     <button className ="square" > X </button> */}
      </div>     
      
      <div className="board-row">
      <Square value = {squares[3]} onSquareClick={() => handleClick(3)} />                              {/* <button className ="square" > X </button> */}
        <Square value = {squares[4]} onSquareClick={() => handleClick(4)} />                     {/*<button className ="square" > X </button> */}
        <Square  value = {squares[5]} onSquareClick={() => handleClick(5)} />                        {/*}     <button className ="square" > X </button> */}
      </div>    
        <div className="board-row">
         {/* JSX can return only one element to return multiple we need to use <> ...</> */}                                
         <Square  value = {squares[6]} onSquareClick={() => handleClick(6)} />                              {/* <button className ="square" > X </button> */}
        <Square  value ={squares[7]} onSquareClick={() => handleClick(7)} />                     {/*<button className ="square" > X </button> */}
        <Square value ={squares[8]} onSquareClick={() => handleClick(8)} />                        {/*}     <button className ="square" > X </button> */}
    </div>
   </>
  ); //button JSX template
}


function calculateWinner(squares)
{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
  ];
  for(let i=0 ;i< lines.length ;i++)
  {
    const[a,b,c] =lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
    {
      return squares[a];
    }

  }
  return null;
}
