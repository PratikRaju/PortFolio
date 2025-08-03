import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <nav className={`absolute top-0 left-0 w-full z-50 bg-transparent p-6 pl-15 pr-20 ${isHome ? 'text-white' : 'text-gray-800'}`}>
            <div className="flex justify-between items-center">
                <div><img src="public/King-Logo-removebg-preview.png" alt="" width={90}/></div>
                <ul className="flex relative top-[-15px] gap-4 font-semibold">
                    {[
                        { path: '/', name: 'Home' },
                        { path: '/about', name: 'About' },
                        { path: '/skills', name: 'Skills' },
                        { path: '/contact', name: 'Contact' },
                        {path: '/AI', name: 'Ai ✦'}
                    ].map((item) => {
                        const isActive = location.pathname === item.path;
                        const isHovered = hoveredItem === item.path;
                        
                        return (
                            <li 
                                key={item.path}
                                onMouseEnter={() => setHoveredItem(item.path)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link
                                    to={item.path}
                                    className={`
                                        px-4 py-2 rounded-lg 
                                        transition-all duration-300
                                        ${
                                            isActive
                                            ? isHome
                                                ? 'text-white bg-green-400 bg-opacity-20'
                                                : 'text-indigo-600 bg-indigo-100'
                                            : isHome
                                                ? 'text-[#9FB3A3]'
                                                : 'text-gray-800'
                                        }
                                        ${
                                            isHovered && !isActive
                                            ? isHome
                                                ? 'text-white bg-green-400 bg-opacity-10'
                                                : 'text-indigo-400 bg-indigo-50'
                                            : ''
                                        }
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;