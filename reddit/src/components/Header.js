import headerStyles from '../styles/header.module.css';

export default function Header() {

    return (
        <header className={headerStyles.header}>
            <button className={`${headerStyles.button} ${headerStyles.buttonLarge}`}></button>

            <form className={headerStyles.searchForm}>
                <input type="search" className={headerStyles.searchInput}/>
                <button className={`${headerStyles.button} ${headerStyles.buttonSearch}`}></button>
            </form>


            <button className={`${headerStyles.button} ${headerStyles.buttonSmall}`}></button>
            <button className={`${headerStyles.button} ${headerStyles.buttonSmall}`}></button>
            <button className={`${headerStyles.button} ${headerStyles.buttonSmall}`}></button>
        </header>
    );

}