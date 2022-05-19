import styles from './Projects.module.scss'
import {db} from '../../firebase-config'
import {collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from 'react';

const Projects = () => {

    const [projects,setProjects] = useState([])
    
    useEffect(() => {
        const projectsCollection = collection(db,'projects&blogs')
        const getProjects = async () => {
            const snapshot = await getDocs(projectsCollection);
            setProjects(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})));
        }
    
        getProjects();
        
        
        }, []);

    
    return ( 
        <div className={styles.container}>

            <span className={styles.title}>Projects & Blogs</span>

            <div className={styles.wrapper}>
                {projects.map((project) => {
                    return(
                        <div className={styles.card} key={project.id} onClick={() => window.open(project.link)}>
                            <img src={project.imgURL} alt="projects" />
                            <span>{project.title}</span>
                            <p>{project.description}</p>
                        </div>
                    )
                })}

            </div>


        </div>
     );
}
 
export default Projects;