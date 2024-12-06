import { useState } from 'react'
import { SidebarData } from './sidebarData';

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
                                <a href={data.path}>
                                    <span>{data.icon}</span>
                                    <span>{isOpen? data.title: ''}</span>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default SidebarNavbar
