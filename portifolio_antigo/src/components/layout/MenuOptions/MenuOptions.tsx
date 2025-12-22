import React from "react";
import styles from './MenuOptions.module.css';

type MenuOptions = {
    name: string
}

const MenuOptions: React.FC<MenuOptions> = ({ name }) => {

    return (
        <div className={styles.options}>
            <h2>{name}</h2>
            <div className={styles.linha}></div>
        </div>
    )
}

export default MenuOptions;