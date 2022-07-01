import hitImg from '../assets/Hit-small.png';
import missImg from '../assets/Miss-small.png';
import hitCounterStyles from '../styles/hit-counter.module.css';

export default function HitCounter({ maxHits, hits }) {

    const hitMarks = [];
    for (let i = 0; i < hits; i++) {
        hitMarks.push( <img className={hitCounterStyles.mark} src={hitImg} key={i}/> );
    }

    const missMarks = [];
    const remainingHits = maxHits - hits;
    for (let i = 0; i < remainingHits; i++) {
        missMarks.push( <img className={hitCounterStyles.mark} src={missImg} key={hits + i}/> );
    }

    return (
        <div>
            {hitMarks}
            {missMarks}
        </div>
    );
}