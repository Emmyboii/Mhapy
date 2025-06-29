import NoteEdit from '../Images/noteedit.svg';
import { BsThreeDots } from 'react-icons/bs';

const MiniNote = ({ setAddNotes, setNotes }) => {
    return (
        <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-6'>
                <div className='flex items-center justify-between gap-[10px]'>
                    <p className='text-[24px] text-[#252525] font-[450]'>Previous 7 days</p>
                    <p
                        onClick={() => {
                            setNotes('all')
                            localStorage.setItem('allOrDeleted', 'all')
                            window.scrollTo(0, 0)
                        }}
                        className='text-[16px] text-[#25252580] font-[450] mr-12 underline cursor-pointer'>All Notes</p>
                </div>
                <div className='grid mq:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-start sm:gap-[18px] gap-2'>

                    <div className='py-6 px-3 flex flex-col gap-6 bg-[#0098D95E] rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025</p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>Amanda’s Note</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            Lorem ipsum dolor sit amet consectetur. Ut dignissim tempus nibh tellus quis nisl blandit in.
                            Accumsan phasellus justo justo arcu sed nunc purus. Ut et amet consequat ut purus commodo etiam.
                            Sit quam eget elementum sed egestas amet donec senectus amet.
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                    <div className='py-6 px-3 flex flex-col gap-6 bg-[#FFB7B8] rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025</p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>Amanda’s Note</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            Lorem ipsum dolor sit amet consectetur. Ut dignissim tempus nibh tellus quis nisl blandit in.
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img
                                onClick={() => {
                                    setAddNotes(true)
                                    localStorage.setItem('addOrEditNote', JSON.stringify(true))
                                    window.scrollTo(0, 0)
                                }}
                                className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                    <div className='py-6 px-3 flex flex-col gap-6 bg-[#ffffff] shadow-custom-sp rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025</p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>Amanda’s Note</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            Lorem ipsum dolor sit amet consectetur. Ut dignissim tempus nibh tellus quis nisl blandit in.
                            Accumsan phasellus justo
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setAddNotes(true)
                            localStorage.setItem('addOrEditNote', JSON.stringify(true))
                            window.scrollTo(0, 0)
                        }}
                        className='border-dashed self-center mx-auto sm:py-[43px] cursor-pointer py-[28px] sm:w-[150px] w-[103px] sm:px-10 px-[20px] flex flex-col text-center items-center justify-center gap-2 rounded-2xl border-[#2525254D] border-[1.4px]'>
                        <img className='size-5' src={NoteEdit} alt="" />
                        <p className='text-[#252525CC] sm:text-[16px] text-[12px] font-[450]'>New Note</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex items-center justify-between gap-[10px]'>
                    <p className='text-[24px] text-[#252525] font-[450]'>Recently deleted</p>
                    <p
                        onClick={() => {
                            setNotes('deleted')
                            localStorage.setItem('allOrDeleted', 'deleted')
                            window.scrollTo(0, 0)
                        }}
                        className='text-[16px] text-[#25252580] font-[450] underline cursor-pointer'>See All</p>
                </div>
                <div className='grid mq:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-start sm:gap-[18px] gap-2'>

                    <div className='py-6 px-3 flex flex-col gap-6 bg-[#0098D95E] rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025</p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>Amanda’s Note</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            Lorem ipsum dolor sit amet consectetur. Ut dignissim tempus nibh tellus quis nisl blandit in.
                            Accumsan phasellus justo justo arcu sed nunc purus. Ut et amet consequat ut purus commodo etiam.
                            Sit quam eget elementum sed egestas amet donec senectus amet.
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                    <div className='py-6 px-3 flex flex-col gap-6 bg-[#FFB7B8] rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025</p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>Amanda’s Note</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            Lorem ipsum dolor sit amet consectetur. Ut dignissim tempus nibh tellus quis nisl blandit in.
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img
                                onClick={() => {
                                    setAddNotes(true)
                                    localStorage.setItem('addOrEditNote', JSON.stringify(true))
                                }}
                                className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                    <div className='py-6 px-3 flex flex-col gap-6 bg-[#ffffff] shadow-custom-sp rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025</p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>Amanda’s Note</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            Lorem ipsum dolor sit amet consectetur. Ut dignissim tempus nibh tellus quis nisl blandit in.
                            Accumsan phasellus justo
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                    <div className='py-6 px-3 flex flex-col gap-6 bg-[#10BF2A54] rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>14/04/2025</p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>Amanda’s Note</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            Lorem ipsum dolor sit amet consectetur. Ut dignissim tempus nibh tellus quis nisl blandit in.
                            Accumsan phasellus justo justo arcu sed nunc purus. Ut et amet consequat ut purus commodo etiam.
                            Sit quam eget elementum sed egestas amet donec senectus amet.
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniNote