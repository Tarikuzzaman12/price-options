import React, { useState } from 'react';
import Link from '../Link/Link';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" },
    ];

    return (
        <nav>
            <div className='md:hidden text-2xl ' onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose />
                    :<LuMenu></LuMenu>
                } 
                </div>
            <ul className={`md:flex absolute duration-1000 md:static px-6 ${open ? 'top-10': '-top-60' }`}>
                {routes.map(route => (
                    <Link key={route.id} route={route}></Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
