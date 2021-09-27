import React, { useState } from 'react';
import './styles.css';

const Game = () => {

  const [cells, setCells] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('x');
	const [winner, setWinner] = useState();

	const checkForWinner = (squares) => {
		let combos = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			]

		for (let i = 0; i < combos.length; i++) {
    
      let row = combos[i]

      let r1 = row[0]

      let r2 = row[1]
      
      let r3 = row[2]

      console.log('zz' + r1 + 
      'ss' + squares[r1] + 'sss'+ squares[r2] + 'lll' + squares[r3])
      
      console.log(squares[7])
			 if (
					squares[r1] == squares[r2] &&
					squares[r2] == squares[r3]
				) {
          console.log('sss')
					setWinner(squares[r1]);
				}
			
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (player === 'x') {
			squares[num] = 'x';
			setPlayer('o');
		} else {
			squares[num] = 'o';
			setPlayer('x');
		}

		checkForWinner(squares);
		setCells(squares);
	};

	const playAgain = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ n }) => {
		return <td onClick={() => handleClick(n)}><h3>{cells[n]}</h3></td>;
	};

	return (
		<div className='container'>
			<table>
				Player: {player}
				<tbody>
					<tr>
						<Cell n={0} />
						<Cell n={1} />
						<Cell n={2} />
					</tr>
					<tr>
						<Cell n={3} />
						<Cell n={4} />
						<Cell n={5} />
					</tr>
					<tr>
						<Cell n={6} />
						<Cell n={7} />
						<Cell n={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p>Player {winner} Won the Game!</p>
					<button onClick={() => playAgain()}>New Game</button>
				</>
			)}
		</div>
	);
};

export default Game;