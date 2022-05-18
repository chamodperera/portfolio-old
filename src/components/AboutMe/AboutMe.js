import styles from './AboutMe.module.scss';
import img from "../../Assets/images/about_me.png"
import {db} from '../../firebase-config'
import {collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from 'react';

const AboutMe = () => {
    const [contacts,setContacts] = useState([])
    
    useEffect(() => {
        const contactsCollection = collection(db,'contacts')
        const getContacts = async () => {
            const snapshot = await getDocs(contactsCollection);
            setContacts(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})));
        }
    
        getContacts();
        
        
      }, []);

    return ( 
        <div className={styles.container}>
            

                <div className={styles.contentLeft}>
                    <span className={styles.sec1}>
                        Hi,
                    </span>

                    <div className={styles.sec2}>
                        <span>I'm Chamod Perera</span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.sec3}>
                        <span className={styles.part1}>
                            <span>Web Designer | Developer</span>
                            <span className={styles.line}>
                                <span className={styles.line1}></span>
                                <span className={styles.line2}></span>
                            </span>
                        </span>
                        

                        <span>and a </span>

                        <span className={styles.part2}>
                            <span>Graphics Designer</span>
                            <span className={styles.line}></span>   
                        </span>
                        
                    </div>

                </div>

                <div className={styles.contentRight}>
                    <div className={styles.contacts}>
                    {contacts.map((contact) => {
                        return(
                            <div className={styles.icon}  key={contact.id} onClick={() => window.open(contact.link)} >
                                    <img  src={contact.imgURL} alt="contact"/>
                            </div>
                        )
                    })}

                    </div>

                
                    <div className={styles.imgContainer}>
                        <img src={img}  />
                    </div>   

                </div>
                
            </div>
       
     );
}
 
export default AboutMe;