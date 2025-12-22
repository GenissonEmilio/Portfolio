import React from "react";
import styles from './Footer.module.css';
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer: React.FC = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/genisson-emilio" target="_blank"><FaLinkedinIn /></a>
                <a href="https://github.com/GenissonEmilio" target="_blank"><FaGithub /></a>
                <a href="https://www.instagram.com/genisson.emilio" target="_blank"><FaInstagram /></a>
            </div>
            <div>
                <p>&copy; 2025 genissondev. Todos os direitos reservados.</p>
            </div>
            
        </div>
    )
}

export default Footer;
