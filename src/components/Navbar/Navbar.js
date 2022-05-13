import './Navbar.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState } from 'react';


const Navbar = () => {
    const [Section,changeSection] = useState('AboutMe')
    return ( 
        <div className="navbar">
            <nav>
                <ul className='container'>
                    <li onClick={()=>{changeSection('AboutMe')}} className={Section==='AboutMe'? 'item-selected' : 'item'}>
                        <span><AccountCircleIcon sx={{ fontSize: 40 }} /></span>
                        <span className='label'>About Me</span>
                    </li>
                    <li onClick={()=>{changeSection('Skills')}} className={Section==='Skills'? 'item-selected' : 'item'}>
                        <span><CheckCircleIcon sx={{ fontSize: 40 }} /></span>
                        <span className='label'>Skills</span>
                    </li>
                    <li onClick={()=>{changeSection('Projects')}} className={Section==='Projects'? 'item-selected' : 'item'}>
                        <span><AssignmentIcon sx={{ fontSize: 40 }} /></span>
                        <span className='label'>Projects</span>
                    </li>
                    <li onClick={()=>{changeSection('Contact')}} className={Section==='Contact'? 'item-selected' : 'item'}>
                        <span><MailOutlineIcon sx={{ fontSize: 40 }} /></span>
                        <span className='label'>Contact</span>
                    </li>
                    <span className='areafill'>
                        <hr color='#C8C8C8'/>
                        <hr color='#D37239'/>
                    </span>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;