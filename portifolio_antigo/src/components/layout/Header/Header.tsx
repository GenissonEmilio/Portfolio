import React from "react";
import Menu from "../MenuDesktop/Menu";
import styles from "./Header.module.css";

const Header: React.FC = () => {

    return (
        <div className={styles.menu}>
            <Menu />
        </div>
    )
}

export default Header;