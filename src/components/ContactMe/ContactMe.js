import styles from './ContactMe.module.scss'
import img from "../../Assets/images/contact.png"
import {db} from '../../firebase-config'
import {collection, getDocs} from "firebase/firestore"
import { useEffect, useState } from 'react';

const ContactMe = () => {

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

            <span className={styles.title}>
                Contact Me
            </span>

            <div className={styles.content}>

                <div className={styles.contacts}>
                    {contacts.map((contact) => {
                        return(
                            <div className={styles.card} key={contact.id}>
                                    <img  src={contact.imgURL} />
                                    <span>{contact.title}</span>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.illustration}>
                    <img src={img} />
                </div>

            </div>

        </div>
     );
}
 
export default ContactMe;