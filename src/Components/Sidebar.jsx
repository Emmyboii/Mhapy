import Logo from '../Images/Logo.svg';
import dashboard from '../Images/dashboard.svg';
import therapist from '../Images/therapist.svg';
import calender from '../Images/calender.svg';
import notes from '../Images/note.svg';
import message from '../Images/message.svg';
import pricing from '../Images/pricing.svg';
import homework from '../Images/homework.svg';
import api from '../Images/api.svg';
import settings from '../Images/settings.svg';
import profileAvatar from '../Images/profileAvatar.svg';

import { Link } from 'react-router-dom'

const Sidebar = () => {

    const mainMenu = [
        { item: 'Dashboard', image: dashboard, path: '/' },
        { item: 'Therapist', image: therapist, path: '/therapist' },
        { item: 'Calender', image: calender, path: '/calender' },
        { item: 'Notes', image: notes, path: '/notes' },
        { item: 'Message', image: message, path: '/message' },
        { item: 'Pricing', image: pricing, path: '/pricing' },
    ]

    const general = [
        { item: 'Homework', image: homework, path: '/homework' },
        { item: 'API Key', image: api, path: '/api' },
        { item: 'Settings', image: settings, path: '/settings' },
    ]

    return (
        <div className='w-[260px] p-5 sticky top-0 min-h-screen bg-[#44189008]'>
            <Link className="flex items-center gap-1" to='/'>
                <img className="size-[30px]" src={Logo} alt="Logo" />
                <p className="text-[#441890] font-bold text-[27px]">mhapy</p>
            </Link>
            <div className='flex flex-col gap-[30px]'>
                <div className='mt-7'>
                    <p className='uppercase text-[16px] text-[#252525CC] font-medium'>Main Menu</p>
                    <div className='flex flex-col gap-4 mt-4'>
                        {mainMenu.map(({ item, image, path }) => (
                            <Link to={path}>
                                <div className='flex py-[10px] px-5 rounded-[10px] gap-3 text-[16px] text-[#25252580]'>
                                    <img className='size-6' src={image} alt="" />
                                    {item}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='mt-7'>
                    <p className='uppercase text-[16px] text-[#252525CC] font-medium'>General</p>
                    <div className='flex flex-col gap-4 mt-4'>
                        {general.map(({ item, image, path }) => (
                            <Link to={path}>
                                <div className='flex py-[10px] px-5 rounded-[10px]  gap-3 text-[16px] text-[#25252580]'>
                                    <img className='size-6' src={image} alt="" />
                                    {item}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar