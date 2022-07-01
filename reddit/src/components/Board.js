import boardStyles from '../styles/board.module.css';
import Cell from "./Cell";

export default function Board({ board, onCellClick}) {

    return (
        <section className={boardStyles.board}>
            {board.flatMap((row, rowIndex) => row
                .map((cell, colIndex) => <Cell cellState={cell.state} key={cell.id} onClick={() => onCellClick(rowIndex, colIndex)} />))}
        </section>
    );

}