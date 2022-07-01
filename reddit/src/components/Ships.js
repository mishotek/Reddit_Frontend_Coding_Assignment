import Ship from "./Ship";

export default function Ships({ ships }) {

    return (
        <div>
            {ships.map(ship => <Ship ship={ship} key={ship.id} />)}
        </div>
    );

}