import React from 'react';
import s from "./Projects.module.css";

const ProjectItem = (props) => {
    return <div className={s.projectItem}>
        <div className={s.project}>
            Name of project
        </div>
        <div className={s.projectDesc}>
            <div className={s.title}>
                title
            </div>
            <div className={s.desc}>
                description
            </div>
        </div>
    </div>
};

export default ProjectItem;