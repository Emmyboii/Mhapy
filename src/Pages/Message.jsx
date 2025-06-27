import React, { useEffect, useState } from 'react'
import MessageSideBar from '../Components/MessageSideBar'
import MessageBox from '../Components/MessageBox'

const Message = () => {

    const [messageClicked, setMessageClicked] = useState(true)
    const [SMScreens, setSMScreens] = useState(window.innerWidth < 640)

    useEffect(() => {
        const handleResize = () => {
            setSMScreens(window.innerWidth < 640)
        }
        if (SMScreens) {
            setMessageClicked(false)
        } else {
            setMessageClicked(true)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [SMScreens])

    return (
        <div className='flex h-[82vh] overflow-hidden'>
            {(!SMScreens || !messageClicked) && (
                <MessageSideBar setMessageClicked={setMessageClicked} />
            )}
            {(SMScreens && messageClicked) && (
                <div>
                    <MessageBox setMessageClicked={setMessageClicked} />
                </div>
            )}
            <div className='sm:block hidden'>
                <MessageBox setMessageClicked={setMessageClicked} />
            </div>
        </div>
    )
}

export default Message