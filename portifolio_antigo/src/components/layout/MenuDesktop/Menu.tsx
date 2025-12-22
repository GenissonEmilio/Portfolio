import styles from "./Menu.module.css";
import Mobile from "../MenuMobile/Mobile";

const Menu: React.FC = () => {
    const myName: string = "<Genisson Emilio/>";

    return (
        <nav>
            <div className={styles.name}>
                <a href="#home">{myName}</a>
            </div>

            <ul className={styles.links}>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>

            <Mobile />
        </nav>
    )
}

export default Menu;