import { useState } from 'react'
import { SidebarData } from './sidebarData';
import { Link } from 'react-router';

function SidebarNavbar() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <button className='toggle-button' onClick={handleClick}>
                    <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>
                </button>
                <div className="header-logo">
                    <h2>{isOpen ? "Logo" : ''}</h2>
                </div>
            </div>
            <nav className='nav-menu'>
                <ul>
                    {
                        SidebarData?.map((data, ind) => {
                            return <li key={ind}>
                                <Link to={data.to} className='nav-link'>
                                    <span className='nav-link1'>{data.icon}</span>
                                    <span className='nav-link2'>{isOpen ? data.title : ''}</span>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default SidebarNavbar
