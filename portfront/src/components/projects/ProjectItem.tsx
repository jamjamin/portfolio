import Link from 'next/link'

interface ProjectItemProps {
    id : number
    title : string,
    type: string,
    languages: string[]
}

const ProjectItem: React.FC<ProjectItemProps> = ({id, title, type, languages}) => {
    return (
        <Link href={`/projectlist/${id}`}>
            <div className='project-item'>
            <div className='project-title'> {title} </div>
            <div> {type} </div>
            <div className='project-tags'>
                {languages}
            </div>
            </div>
        </Link>
    );
}
export default ProjectItem;