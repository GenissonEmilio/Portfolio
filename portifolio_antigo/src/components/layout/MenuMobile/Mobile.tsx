import React, { useEffect, useState } from "react";
//import { CiMenuBurger } from "react-icons/ci";
//import { AiOutlineClose } from "react-icons/ai"
import styles from "./Mobile.module.css";

const Mobile: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    //const [rotating, setRotating] = useState(false);

    const handleClick = () => {
        //setRotating(true);
        setTimeout(() => {
            setOpen(!isOpen);
            //setRotating(false);
        }, 250);
    };

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timeout = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <div>
            <button className={styles.hamburguer} onClick={handleClick}>
                <span className={`${styles.line} ${isOpen ? styles.line1Open : ""}`}></span>
                <span className={`${styles.line} ${isOpen ? styles.line2Open : ""}`}></span>
                <span className={`${styles.line} ${isOpen ? styles.line3Open : ""}`}></span>
            </button>

            {shouldRender && (
                <div className={`${styles.menu} ${isOpen? styles.menuOpen : styles.menuClose}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                        <li><a href="#sobre" onClick={() => setOpen(false)}>Sobre</a></li>
                        <li><a href="#projetos" onClick={() => setOpen(false)}>Projetos</a></li>
                        <li><a href="#contato" onClick={() => setOpen(false)}>Contatos</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Mobile;
