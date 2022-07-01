import cellStyles from '../styles/cell.module.css';
import {CellState} from "../types/cell-state.type";
import hitImage from '../assets/Hit.png';
import missImage from '../assets/Miss.png';


export default function Cell({ cellState, onClick }) {

    return (
        <div onClick={onClick} className={cellStyles.cell}>
            {cellState === CellState.untouched ? <div className={cellStyles.cellUntouched}/> : null}
            {cellState === CellState.missed ? <img src={missImage} className={cellStyles.image}/> : null}
            {cellState === CellState.hit ? <img src={hitImage} className={cellStyles.image}/> : null}
        </div>
    )

}