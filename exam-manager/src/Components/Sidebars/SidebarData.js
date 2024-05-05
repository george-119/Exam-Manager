import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as PiIcons from "react-icons/pi";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";




export const SidebarData = [
    {
        title: 'Dashboard',
        path: '',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'TimeTable',
        path: '',
        icon: <GrIcons.GrSchedule/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[{

            title: 'Schedule',
            path: '/schedule',
            icon: <GrIcons.GrScheduleNew/>,
            cName: 'nav-text'
        },
        {
            title: 'List Exams',
            path: '/exams',
            icon: <GiIcons.GiNotebook/>,
            cName: 'nav-text'
        }]
    },
    {
        title: 'Subjects',
        path: '',
        icon: <GiIcons.GiBookshelf/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[{

            title: 'Add Subjects',
            path: '/addsubject',
            icon: <GiIcons.GiSpellBook/>,
            cName: 'nav-text'
        },
        {
            title: 'List Subjects',
            path: '/subjects',
            icon: <PiIcons.PiBooks/>,
            cName: 'nav-text'
        }]
    },
    {
        title: 'Allocation',
        path: '',
        icon: <IoIcons.IoIosLocate/>,
        cName: 'nav-text'
    },
    {
        title: 'Students',
        path: '',
        icon: <PiIcons.PiStudentBold/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[{

            title: 'Add Students',
            path: '/addstudent',
            icon: <FaIcons.FaRegPlusSquare/>,
            cName: 'nav-text'
        },
        {
            title: 'List Students',
            path: '/students',
            icon: <PiIcons.PiStudentFill/>,
            cName: 'nav-text'
        },
        {
            title: 'Change Password',
            path: '',
            icon: <MdIcons.MdLockReset/>,
            cName: 'nav-text'
        }]
    },
    {
        title: 'Teachers',
        path: '',
        icon: <GiIcons.GiTeacher/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[{

            title: 'Add teachers',
            path: '/addteacher',
            icon: <FaIcons.FaRegPlusSquare/>,
            cName: 'nav-text'
        },
        {
            title: 'List Teachers',
            path: '/teachers',
            icon: <FaIcons.FaChalkboardTeacher/>,
            cName: 'nav-text'
        },
        {
            title: 'Change Password',
            path: '',
            icon: <MdIcons.MdLockReset/>,
            cName: 'nav-text'
        }]
    },
    {
        title: 'Classroom',
        path: '',
        icon: <SiIcons.SiGoogleclassroom/>,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[{

            title: 'New class',
            path: '/classroom',
            icon: <FaIcons.FaRegPlusSquare/>,
            cName: 'nav-text'
        },
        {
            title: 'List Classes',
            path: '/classes',
            icon: <RiIcons.RiGalleryView2/>,
            cName: 'nav-text'
        }]
    },
    {
        title: 'Logout',
        path: '/admin',
        icon: <AiIcons.AiOutlineLogout/>,
        cName: 'nav-text'
    }
]