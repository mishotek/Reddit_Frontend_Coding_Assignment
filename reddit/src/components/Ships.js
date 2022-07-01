import Ship from "./Ship";
import shipStyles from '../styles/ship.module.css';

export default function Ships({ ships }) {

    return (
        <div className={shipStyles.ships}>
            {ships.map(ship => <Ship ship={ship} key={ship.id} />)}
        </div>
    );

}