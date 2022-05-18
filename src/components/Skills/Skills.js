import styles from './Skills.module.scss'
import img from "../../Assets/images/skills.png"
import {db} from '../../firebase-config'
import {collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from 'react';



const Skills = () => {
    const [skills,setSkills] = useState([])
    
    useEffect(() => {
        const skillsCollection = collection(db,'skills')
        const getSkills = async () => {
            const snapshot = await getDocs(skillsCollection);
            setSkills(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})));
        }
    
        getSkills();
        
        
      }, []);
    
    
    return ( 
        <div className={styles.container}>
            <span className={styles.title}>Skills & Tools
                <div className={styles.illustration}>
                    <img src={img} />
                </div>
            </span>

            <div className={styles.wrapper}>
                {skills.map((skill) => {
                    return(
                        <div className={styles.card} key={skill.id} onClick={() => window.open(skill.link)}>
                            <div className={styles.item}>
                                <img className={styles.skillimg} src={skill.imgURL} />
                                <span className={styles.skillTitle}>{skill.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
     );
}
 
export default Skills;