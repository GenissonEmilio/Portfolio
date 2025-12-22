import React from "react";
import { motion } from "framer-motion";
import styles from './ToolsIcons.module.css';

type ToolsIcons = {
    name: string,
    color: string,
    icon: React.ElementType
}

const ToolsIcons: React.FC<ToolsIcons> = ({ name, color, icon: Icon}) => {

    return (
        <motion.div
        className={styles.iconContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Icon style={{ color: `${color}`, fontSize: '2.5rem' }} />
            <p className={styles.projectName}>{name}</p>
        </motion.div>
    )
}

export default ToolsIcons;