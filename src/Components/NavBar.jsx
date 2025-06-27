import { Link, useLocation } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import avatar2 from '../Images/avatar2.svg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import avatar from '../Images/avatar.svg';
import { useMemo } from "react";

const NavBar = ({ setNotification, notification, dashboardFrame, setOpenSidebar }) => {

    const location = useLocation()

    const getTitle = () => {
        if (location.pathname === '/') {
            if (dashboardFrame === 'portal') return 'Hello John, welcome back!';
            if (dashboardFrame === 'client') return 'Dashboard';
            if (dashboardFrame === 'healthProfile') return 'Dashboard';
        }

        if (location.pathname.includes('/clients')) return 'Client Profile';

        const routeTitles = {
            '/therapist': 'Therapist',
            '/calender': 'Calender',
            '/notes': 'Notes',
            '/message': 'Message',
            '/pricing': 'Pricing',
            '/homework': 'Homework',
            '/api': 'API',
            '/settings': 'Settings',
        };

        return routeTitles[location.pathname] || 'Profile';
    };

    const title = useMemo(() => getTitle(), [location.pathname, dashboardFrame]);



    return (
        <div className="flex py-6 sm:px-[27px] px-3 pb-10 justify-between relative ">
            <div className='flex items-center gap-2 text-[#252525] text-[22px] font-medium'>
                <div
                    onClick={() => setOpenSidebar(true)}
                    className="border border-[#0000000A] lg:hidden block rounded-full p-[7px] cursor-pointer"
                >
                    <FcMenu />
                </div>
                <span className="mk:block hidden">{title}</span>
            </div>
            <div className="flex items-center gap-[21px]">
                <div className="relative sm:flex hidden items-center justify-end">
                    <input
                        className='bg-[#F6F6F6] placeholder:text-[#23235F] text-[#23235F] py-3 px-9 rounded-lg min-w-[300px]'
                        type="text"
                        name=""
                        id=""
                        placeholder="Search anything"
                    />
                    <FiSearch className="absolute right-9 text-[#94A2BC] size-5 font-bold" />
                </div>
                <Link to='/message'>
                    <div className="bg-[#F6F6F6] cursor-pointer rounded-[84px]">
                        <AiOutlineMessage className="size-10 p-[10px] text-[#23235F]" />
                    </div>
                </Link>
                <div onClick={() => setNotification(!notification)} className="bg-[#F6F6F6] cursor-pointer rounded-[84px]">
                    <FaRegBell className="size-10 p-[10px] text-[#23235F]" />
                </div>
                <div className="bg-[#441890] mf:block hidden cursor-pointer text-white py-[11px] px-4 rounded-md">
                    Add team member
                </div>
                <Link to='/profile'>
                    <img className="size-[32px] lg:hidden block" src={avatar} alt="" />
                </Link>

            </div>
            {notification && (
                <div className="absolute right-0 top-12 lg:top-20 border border-[#25252533] rounded-lg z-50 sm:w-[481px] w-full h-[85vh] overflow-auto bg-white flex flex-col gap-[10px] p-[30px]">
                    <p className="text-black text-[24px] font-[450px]">Notifications</p>
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex gap-[14px] items-center">
                            <img className="size-[50px]" src={avatar} alt="" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] text-[#000000] font-medium">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nisi
                                    atque odio inventore numquam cumque officiis veritatis sit, quo
                                </p>
                                <p className="text-[16px] text-[#25252580] font-[450]">March 1, 2023</p>
                            </div>
                        </div>
                        <hr className="w-full border border-[#25252533]" />
                        <div className="flex gap-[14px] items-center">
                            <img className="size-[50px]" src={avatar2} alt="" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] text-[#000000] font-medium">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nisi
                                    atque odio inventore numquam cumque officiis veritatis sit, quo
                                </p>
                                <p className="text-[16px] text-[#25252580] font-[450]">March 1, 2023</p>
                            </div>
                        </div>
                        <hr className="w-full border border-[#25252533]" />
                        <div className="flex gap-[14px] items-center">
                            <img className="size-[50px]" src={avatar} alt="" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] text-[#000000] font-medium">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nisi
                                    atque odio inventore numquam cumque officiis veritatis sit, quo
                                </p>
                                <p className="text-[16px] text-[#25252580] font-[450]">March 1, 2023</p>
                            </div>
                        </div>
                        <hr className="w-full border border-[#25252533]" />
                        <div className="flex gap-[14px] items-center">
                            <img className="size-[50px]" src={avatar2} alt="" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] text-[#000000] font-medium">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nisi
                                    atque odio inventore numquam cumque officiis veritatis sit, quo
                                </p>
                                <p className="text-[16px] text-[#25252580] font-[450]">March 1, 2023</p>
                            </div>
                        </div>
                        <hr className="w-full border border-[#25252533]" />
                        <div className="flex gap-[14px] items-center">
                            <img className="size-[50px]" src={avatar} alt="" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[16px] text-[#000000] font-medium">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nisi
                                    atque odio inventore numquam cumque officiis veritatis sit, quo
                                </p>
                                <p className="text-[16px] text-[#25252580] font-[450]">March 1, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar