import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import {useEffect, useState} from "react";
import {CellState} from "./types/cell-state.type";
import {LAYOUT} from "./constants/layout";
import {BOARD_SIZE} from "./constants/board";
import Ships from "./components/Ships";
import gameStyles from './styles/game.module.css';

function App() {

    const [isGameOver, setIsGameOver] = useState(false);
    const [ships, setShips] = useState([])
    const [board, setBoard] = useState([]);

    useEffect(() => {
        initGame(BOARD_SIZE, LAYOUT);
    }, []);

    const initGame = (boardSize, layout) => {
        const newBoard = getNewBoard(boardSize);
        setBoard(newBoard);

        const newShips = layout.map((ship, index) => ({
            ...ship,
            id: index,
            maxLives: ship.positions.length,
            hits: 0,
        }));
        setShips(newShips);
    };

    const getNewBoard = (boardSize) => {
        const newBoard = [];
        for (let i = 0; i < boardSize; i++) {
            const newBoardRow = [];
            for (let j = 0; j < boardSize; j++) {
                newBoardRow.push({state: CellState.untouched, id: i * boardSize + j});
            }
            newBoard.push(newBoardRow);
        }
        return newBoard;
    }

    const onCellClick = (row, col) => {
        if (isGameOver) {
            return;
        }

        const cell = getCell(board, row, col);

        if (cell.state !== CellState.untouched) {
            return;
        }

        const { updatedBoard, updatedShips, gameOver } = fire(row, col);
        setBoard(updatedBoard);
        setShips(updatedShips);
        setIsGameOver(gameOver);
    };

    const getCell = (board, row, col) => {
        return board[row][col];
    }

    const getShip = (ships, row, col) => {
        return ships.find(ship => {
            return ship.positions.some(position => {
                return position[0] === row && position[1] === col;
            });
        });
    }

    const areAllShipsSunk = (ships) => {
        return ships.every(ship => isShipSunk(ship));
    }

    const isShipSunk = (ship) => {
        return ship.maxLives === ship.hits;
    }

    const cloneBoard = (board) => {
        return JSON.parse(JSON.stringify(board));
    }

    const cloneShips = (ships) => {
        return JSON.parse(JSON.stringify(ships));
    }

    const fire = (row, col) => {
        const ship = getShip(ships, row, col);
        const shipWasHit = !!ship;

        const newState = shipWasHit ? CellState.hit : CellState.missed;
        const updatedBoard = cloneBoard(board);
        updatedBoard[row][col] = { ...updatedBoard[row][col], state: newState };

        const updatedShips = cloneShips(ships);

        if (shipWasHit) {
            const shipUnderAttack = getShip(updatedShips, row, col);
            shipUnderAttack.hits++;
        }

        const gameOver = areAllShipsSunk(updatedShips);

        return { updatedBoard, updatedShips, gameOver };
    };

    return (
        <>
            <Header/>
            <main className={gameStyles.game}>
                <Ships ships={ships} />
                <Board board={board} onCellClick={onCellClick} />
            </main>
        </>
    );
}

export default App;
