import React from 'react';
import s from './Projects.module.css';
import ProjectItem from './ProjectItem';

const Projects = (props) => {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <div className={s.allProjects}>
                    Projects
                </div>
                <div className={s.projectBox}>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
        </div>
    )
};

export default Projects;