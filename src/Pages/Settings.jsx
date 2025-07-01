import setting from '../Images/settings.svg';
import lock from '../Images/lock.svg';
import profile from '../Images/profile.svg';
import Notification from '../Images/Notification.svg';
import Notification2 from '../Images/Notification2.svg';
import settings2 from '../Images/setting2.svg';
import { useState } from 'react';
import GeneralSettings from '../Components/GeneralSettings';
import PasswordSettings from '../Components/PasswordSettings';
import Deactivation from '../Components/Deactivation';
import NotificationSettings from '../Components/NotificationSettings';

const Settings = () => {

    const [openSettings, setOpenSettings] = useState(false)

    const [settings, setSettings] = useState(() => {
        return localStorage.getItem('settings') || 'settings'
    })
    const [hoveredSetting, setHoveredSetting] = useState(null);

    const settingsBar = [
        { title: 'General Settings', icon: setting, icon2: settings2, view: 'settings' },
        { title: 'Password Settings', icon: lock, icon2: lock, view: 'password' },
        { title: 'Notifiction Settings', icon: Notification, icon2: Notification2, view: 'notification' },
        { title: 'Deactivation', icon: profile, icon2: profile, view: 'deactivate' },
    ]

    return (
        <div>
            <div className='relative'>
                <h1 onClick={() => setOpenSettings(!openSettings)} className="text-[18px] cursor-pointer text-[#252525] mk:hidden block font-medium mb-4">Settings</h1>
                {openSettings && (
                    <div className='border border-[#25252533] z-50 top-10 absolute w-[64%] bg-white rounded-[10px] lg:py-9 lg:px-6 p-5 flex mk:hidden flex-col gap-6'>
                        <div className='flex flex-col gap-6'>
                            {settingsBar.map(({ title, icon, icon2, view }) => {

                                const isActive = settings === view;
                                const isHovered = hoveredSetting === view;

                                return (
                                    <div
                                        onClick={() => {
                                            setSettings(view)
                                            localStorage.setItem('settings', view)
                                            setOpenSettings(!openSettings)
                                        }}
                                        key={view}
                                        onMouseEnter={() => setHoveredSetting(view)}
                                        onMouseLeave={() => setHoveredSetting(null)}
                                        className={`flex items-center gap-[10px] cursor-pointer py-[10px] lg:px-5 px-3 hover:bg-[#44189080] hover:text-[#ffffff] rounded-[10px] text-[16px] text-[#25252580] ${settings === view && 'bg-[#44189080] text-white'}`}>
                                        <img className='size-5' src={isActive || isHovered ? icon2 : icon} alt="" />
                                        <p>{title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
            <div className='flex items-start justify-between w-full gap-5'>
                <div className='border border-[#25252533] w-[35%] bg-white rounded-[10px] lg:py-9 lg:px-6 p-5 mk:flex hidden flex-col gap-6'>
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[#252525] text-[20px] font-medium'>Settings</p>
                        <p className='text-[#25252580] text-[14px] font-normal'>You can Find all settings here</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {settingsBar.map(({ title, icon, icon2, view }) => {

                            const isActive = settings === view;
                            const isHovered = hoveredSetting === view;

                            return (
                                <div
                                    onClick={() => {
                                        setSettings(view)
                                        localStorage.setItem('settings', view)
                                    }}
                                    key={view}
                                    onMouseEnter={() => setHoveredSetting(view)}
                                    onMouseLeave={() => setHoveredSetting(null)}
                                    className={`flex items-center gap-[10px] cursor-pointer py-[10px] lg:px-5 px-3 hover:bg-[#44189080] hover:text-[#ffffff] rounded-[10px] text-[16px] text-[#25252580] ${settings === view && 'bg-[#44189080] text-white'}`}>
                                    <img className='size-5' src={isActive || isHovered ? icon2 : icon} alt="" />
                                    <p>{title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {settings === 'settings' ? (
                    <GeneralSettings />
                ) : settings === 'password' ? (
                    <PasswordSettings />
                ) : settings === 'notification' ? (
                    <NotificationSettings />
                ) : (
                    <Deactivation />
                )}
            </div>
        </div>
    )
}

export default Settings