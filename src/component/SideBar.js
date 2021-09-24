import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './SideBar.css';
import { IconContext } from 'react-icons';

function SideBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <IconContext.Provider value = {{color: '#fff'}}>
           <div className = 'navbar'>
               <Link to = "/" className = 'menu-bars'>
                   <FaIcons.FaBars onClick = {showSidebar}/>
               </Link>
           </div>
           <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items' onClick = {showSidebar}>
                   <li className = 'navbar-toogle'>
                       <Link to = '#' className = 'menu-bars'>
                           <AiIcons.AiOutlineClose/>
                       </Link>
                   </li>
                   {SidebarData.map((item, index) => {
                       return (
                           <li key= {index} className={item.cName}>
                               <Link to = {item.path}>
                                   {item.icon}
                                   <span>{item.tittle}</span>
                               </Link>
                            </li>
                       )
                   })}
               </ul>
           </nav>
           </IconContext.Provider>
        </div>
    )
}

export default SideBar
