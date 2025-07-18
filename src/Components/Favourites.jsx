import { FiSearch } from 'react-icons/fi'
import NoteEdit from '../Images/noteedit.svg';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex sm:flex-row flex-col mq:gap-3 sm:gap-2 gap-1 sm:items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-[24px] text-[#252525] font-[450]'>Favorites</p>
                    <p className='text-[16px] text-[#25252580] font-[450]'>8 Favorites</p>
                </div>
                <div className="relative flex items-center">
                    <input
                        className='border-[#00000033] border placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[30px] rounded-lg w-full'
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Favorites"
                    />
                    <FiSearch className="absolute right-5 text-[#94A2BC] size-5 font-bold" />
                </div>
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
                <div className='py-6 px-3 flex flex-col gap-6 bg-[#FFD83D80] rounded-[10px]'>
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
                                navigate('/notes/editnote')
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
                        Accumsan phasellus justo justo arcu sed nunc purus. Ut et amet consequat ut purus commodo etiam.
                    </p>
                    <div className='flex justify-between'>
                        <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                        <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                    </div>
                </div>
                <div className='py-6 px-3 flex flex-col gap-6 bg-[#FFD83D80] rounded-[10px]'>
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
                        Sit quam eget elementum sed egestas amet donec senectus amet.
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
                        Sit quam eget elementum sed egestas amet donec senectus amet.
                    </p>
                    <div className='flex justify-between'>
                        <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                        <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Favourites