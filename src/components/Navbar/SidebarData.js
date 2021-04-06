import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome size={30} />,
        cName: 'nav-text text-light' 
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <IoIcons.IoIosImages size={30} />,
        cName: 'nav-text text-light' 
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaComment size={30} />,
        cName: 'nav-text text-light' 
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoIosPeople size={30} />,
        cName: 'nav-text text-light' 
    }
]