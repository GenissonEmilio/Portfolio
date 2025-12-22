import React from "react";
import styles from './ProjectBox.module.css';

type ProjectBox = {
    name: string,
    description: string,
    link: string
}

const ProjectBox: React.FC<ProjectBox> = ({ name, description, link }) => {

    return (
        <div className={styles.projectContainer}>
            <img src="/images/project.png" alt="project image" className={styles.projectIMG} />
            <div className={styles.projectText}>
                <h4>{name}</h4>
                <p>{description}</p>
                <a href={link} target="_blank" >Ver mais	&rarr;</a>
            </div>
        </div>
    )
}

export default ProjectBox;