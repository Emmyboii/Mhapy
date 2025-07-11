import Logo from '../Images/Logo.svg';
import dashboard from '../Images/dashboard.svg';
import dashboard2 from '../Images/dashboard2.svg';
import therapist from '../Images/therapist.svg';
import calender from '../Images/calender.svg';
import notes from '../Images/note.svg';
import message from '../Images/message.svg';
import pricing from '../Images/pricing.svg';
import homework from '../Images/homework.svg';
import api from '../Images/api.svg';
import settings from '../Images/settings.svg';
import settings2 from '../Images/setting2.svg';
import avatar from '../Images/avatar.svg';
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';

const Sidebar = ({ setApi }) => {

    const location = useLocation()
    const [hoveredSetting, setHoveredSetting] = useState(null);

    const mainMenu = [
        { item: 'Dashboard', image: dashboard, image2: dashboard2, path: '/dashboard' },
        { item: 'Therapist', image: therapist, image2: therapist, path: '/therapist' },
        { item: 'Calender', image: calender, image2: calender, path: '/calender' },
        { item: 'Notes', image: notes, image2: notes, path: '/notes' },
        { item: 'Message', image: message, image2: message, path: '/message' },
        { item: 'Pricing', image: pricing, image2: pricing, path: '/pricing' },
    ]

    const general = [
        { item: 'Homework', image: homework, image2: homework, path: '/homework' },
        { item: 'API Key', image: api, imag2: api, modal: true },
        { item: 'Settings', image: settings, image2: settings2, path: '/settings' },
    ]

    return (
        <div className='w-[260px] xl:block hidden p-5 sticky top-0 hide-scrollbar overflow-y-scroll h-screen bg-[#44189008]'>
            <Link className="flex items-center gap-1" to='/'>
                <img className="size-[30px]" src={Logo} alt="Logo" />
                <p className="text-[#441890] font-bold text-[27px]">mhapy</p>
            </Link>
            <div className='flex flex-col justify-between h-full gap-[364px]'>
                <div className='flex flex-col gap-[30px]'>
                    <div className='mt-7'>
                       <p className='uppercase text-[16px] text-[#252525CC] font-medium'>Main Menu</p>
                        <div className='flex flex-col gap-4 mt-4'>
                            {mainMenu.map(({ item, image, image2, path }) => {

                                const isActive = location.pathname.startsWith(path);
                                const isHovered = hoveredSetting === path;

                                return (
                                    <Link
                                        onClick={() => {
                                            setApi(false)
                                        }}
                                        key={item} to={path}>
                                        <div
                                            onMouseEnter={() => setHoveredSetting(path)}
                                            onMouseLeave={() => setHoveredSetting(null)}
                                            className={`flex py-[10px] px-5 rounded-[10px] gap-3 text-[16px] hover:bg-[#44189080] hover:text-[#ffffff] text-[#25252580] ${location.pathname.startsWith(path) ? 'bg-[#44189080] text-white' : ''}`}>
                                            <img src={isActive || isHovered ? image2 : image} alt="" />
                                            {item}
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className='mt-7'>
                        <p className='uppercase text-[16px] text-[#252525CC] font-medium'>General</p>
                        <div className='flex flex-col gap-4 mt-4'>
                            {general.map(({ item, image, image2, path, modal }) => {

                                const isActive = location.pathname === path;
                                const isHovered = hoveredSetting === path;

                                return (
                                    <Link
                                        onClick={() => {
                                            if (modal) setApi(true);
                                            else setApi(false)
                                        }}
                                        key={item} to={path}
                                    >
                                        <div
                                            onMouseEnter={() => setHoveredSetting(path)}
                                            onMouseLeave={() => setHoveredSetting(null)}
                                            className={`flex py-[10px] px-5 rounded-[10px] gap-3 text-[16px] hover:bg-[#44189080] hover:text-[#ffffff] text-[#25252580] ${location.pathname === path ? 'bg-[#44189080] text-white' : ''}`}>
                                            <img src={isActive || isHovered ? image2 : image} alt="" />
                                            {item}
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <Link to='profile'>
                    <div className="flex gap-[14px] items-center pb-20 cursor-pointer">
                        <img className="size-[50px]" src={avatar} alt="" />
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] text-[#000000] font-medium">Elijah Adeyemi</p>
                                <p className="text-[16px] text-[#25252580] font-[450]">Therapist</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Sidebar