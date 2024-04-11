import Link from 'next/link';
import './styles.css';
import ProjectItem from "./ProjectItem";
import { projectData } from '../../data/projectData';

const ProjectList = () => {

    function handlSubmit() {
        
    }

    return (
        <>
        <div className="list-top">
            <form className="list-search-form">
                <button>Search</button>
                <input 
                    value=""
                    type="text"
                />
            </form>
        </div>
        <div className='list-main'>
            <div className='project-list'>
                {projectData.map((project, index : number) => {
                    return (
                        <>
                        <ProjectItem 
                            key={index} 
                            id={project.id} 
                            title={project.projectTitle} 
                            type={project.projectType}
                            languages={project.projectTags.languages}
                        />
                        </>
                    )
                })}
            </div>
        </div>
        </>
    );
}
export default ProjectList;