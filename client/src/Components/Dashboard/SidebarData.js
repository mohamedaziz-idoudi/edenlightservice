import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Messages',
        path: '/',
        icon: <FiIcons.FiMessageSquare/>,
        cName: 'nav-text'
    },
    {
        title: 'Create Blog',
        path: '/createBlog',
        icon: <FaIcons.FaBloggerB />,
        cName: 'nav-text'
    }
]