import './Navbar.scss';
import { Fragment,useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, animateScroll as scroll } from "react-scroll";
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

                    <Link onSetActive={()=>{changeSection('AboutMe')}} to="AboutMe" smooth spy offset={-70} >
                        <li className={Section==='AboutMe'? 'itemSelected' : 'item'}>
                            <span><AccountCircleIcon sx={{ fontSize: 40 }} /></span>
                            <span className='label'>About Me</span>
                        </li>
                    </Link>

                    <Link onSetActive={()=>{changeSection('Skills')}} to='Skills' smooth spy offset={-70}>
                        <li  className={Section==='Skills'? 'itemSelected' : 'item'}>
                            <span><CheckCircleIcon sx={{ fontSize: 40 }} /></span>
                            <span className='label'>Skills</span>
                        </li>
                    </Link>

                    <Link onSetActive={()=>{changeSection('Projects')}} to='Projects' smooth spy offset={-70}>
                        <li className={Section==='Projects'? 'itemSelected' : 'item'}>
                            <span><AssignmentIcon sx={{ fontSize: 40 }} /></span>
                            <span className='label'>Projects</span>
                        </li>
                    </Link>

                    <Link onSetActive={()=>{changeSection('Contact')}} to='Contacts' smooth spy offset={-70}>
                        <li className={Section==='Contact'? 'itemSelected' : 'item'}>
                            <span><MailOutlineIcon sx={{ fontSize: 40 }} /></span>
                            <span className='label'>Contact</span>
                        </li>
                    </Link>
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
                            <Link onSetActive={()=>{changeSection('AboutMe')}} to="AboutMe" smooth spy offset={-70}>
                                <li className={Section==='AboutMe'? 'item-selected' : 'item'} >
                                    <span><AccountCircleIcon sx={{ fontSize: 50 }} /></span>
                                </li>
                            </Link>

                            <Link onSetActive={()=>{changeSection('Skills')}} to='Skills' smooth spy offset={-70}>
                                <li className={Section==='Skills'? 'item-selected' : 'item'}>
                                    <span><CheckCircleIcon sx={{ fontSize: 50 }} /></span>
                                </li>
                            </Link>

                            <Link onSetActive={()=>{changeSection('Projects')}} to='Projects' smooth spy offset={-70}>
                                <li className={Section==='Projects'? 'item-selected' : 'item'}>
                                    <span><AssignmentIcon sx={{ fontSize: 50 }} /></span>
                                </li>
                            </Link>

                            <Link onSetActive={()=>{changeSection('Contact')}} to='Contacts' smooth spy offset={-70}>
                                <li className={Section==='Contact'? 'item-selected' : 'item'}>
                                    <span><MailOutlineIcon sx={{ fontSize: 50 }} /></span>
                                </li>
                            </Link>
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