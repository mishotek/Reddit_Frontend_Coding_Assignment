import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import {useEffect, useState} from "react";
import {CellState} from "./types/cell-state.type";
import {LAYOUT} from "./constants/layout";
import {BOARD_SIZE} from "./constants/board";

function App() {

    const [ships, setShips] = useState([])
    const [board, setBoard] = useState([]);

    useEffect(() => {
        initGame(BOARD_SIZE, LAYOUT);
    }, []);

    const initGame = (boardSize, layout) => {
        const newBoard = getNewBoard(boardSize);
        setBoard(newBoard);
        setShips(layout);
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
        const cell = getCell(row, col);

        if (cell.state !== CellState.untouched) {
            return;
        }

        const updatedBoard = fire(row, col);
        setBoard(updatedBoard);
    };

    const getCell = (row, col) => {
        return board[row][col];
    }

    const getShip = (row, col) => {
        return ships.find(ship => {
            return ship.positions.some(position => {
                return position[0] === row && position[1] == col;
            });
        });
    }

    const isShipLocatedAt = (row, col) => {
        return !!getShip(row, col);
    };

    const cloneBoard = (board) => {
        return JSON.parse(JSON.stringify(board));
    }

    const fire = (row, col) => {
        const newState = isShipLocatedAt(row, col) ? CellState.hit : CellState.missed;
        const updatedBoard = cloneBoard(board);
        updatedBoard[row][col] = { ...updatedBoard[row][col], state: newState };
        return updatedBoard;
    };

    return (
        <>
            <Header/>
            <main style={{width: '50%'}}>
                <Board board={board} onCellClick={onCellClick} />
            </main>
        </>
    );
}

export default App;
