import {ShipType} from "../types/ship.type";
import carrierShape from '../assets/Carrier-Shape.png';
import battleshipShape from '../assets/Battleship-Shape.png';
import cruiserShape from '../assets/Cruiser-Shape.png';
import submarineShape from '../assets/Submarine-Shape.png';
import destroyerShape from '../assets/Aircraft-Shape.png';
import shipStyles from '../styles/ship.module.css';
import HitCounter from "./HitCounter";

export default function Ship({ ship }) {

    const getShipImage = (shipType) => {
        switch (shipType) {
            case ShipType.carrier:
                return carrierShape;
            case ShipType.battleship:
                return battleshipShape;
            case ShipType.cruiser:
                return cruiserShape;
            case ShipType.submarine:
                return submarineShape;
            default:
                return destroyerShape;
        }
    }

    return (
        <div className={shipStyles.ship}>
            <img className={shipStyles.shipShape} src={getShipImage(ship.ship)} />
            <HitCounter maxHits={ship.maxLives} hits={ship.hits} />
        </div>
    );

}