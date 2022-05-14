import './Navbar.scss';
import { Fragment,useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';



const Navbar = () => {
    const [Section,changeSection] = useState('AboutMe')
    const [Menu,triggerMenu] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            triggerMenu(false)
          }, 100);
          return () => clearTimeout(timer);
      }, [Section]);
   
    return ( 
        <div className="navbar">
            <nav>
                <ul className='nav-pc'>
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

                <ul className='nav-mobile'>
                    <ul className='menu'>
                        <li onClick={()=>{triggerMenu(!Menu)}} className={Menu? 'triggerMenu-close' : 'triggerMenu-open'}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                        {Menu&&(
                        <Fragment>
                            <li onClick={()=>{changeSection('AboutMe')}} className={Section==='AboutMe'? 'item-selected' : 'item'} >
                                <span><AccountCircleIcon sx={{ fontSize: 50 }} /></span>
                            </li>
                            <li onClick={()=>{changeSection('Skills')}} className={Section==='Skills'? 'item-selected' : 'item'}>
                                <span><CheckCircleIcon sx={{ fontSize: 50 }} /></span>
                            </li>
                            <li onClick={()=>{changeSection('Projects')}} className={Section==='Projects'? 'item-selected' : 'item'}>
                                <span><AssignmentIcon sx={{ fontSize: 50 }} /></span>
                            </li>
                            <li onClick={()=>{changeSection('Contact')}} className={Section==='Contact'? 'item-selected' : 'item'}>
                                <span><MailOutlineIcon sx={{ fontSize: 50 }} /></span>
                            </li>
                        </Fragment>
                        )}
                        
                    </ul>
                    
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