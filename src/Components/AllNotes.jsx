import { FiSearch } from 'react-icons/fi'
import NoteEdit from '../Images/noteedit.svg';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AllNotes = () => {

    const navigate = useNavigate()

    const [clientNotes, setClientNotes] = useState([])

    const getNotes = async () => {
        const token = localStorage.getItem('token')

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/clients/6838188b-da3b-454b-9b5a-3764dd858b87/get_client_clinical_notes`, {
                method: 'GET',
                headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText || 'Failed to get note');
            }

            const data = await res.json();
            console.log('Note saved:', data);
            setClientNotes(data)

        } catch (err) {
            console.error('Failed to save note:', err);
        }
    };

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex sm:flex-row flex-col mq:gap-3 sm:gap-2 gap-1 sm:items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-[24px] text-[#252525] font-[450]'>All Notes</p>
                    <p className='text-[16px] text-[#25252580] font-[450]'>7 Notes</p>
                </div>
                <div className="relative flex items-center">
                    <input
                        className='border-[#00000033] border placeholder:text-[#252525A6] text-[#252525A6] py-3 px-[30px] rounded-lg w-full'
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Notes"
                    />
                    <FiSearch className="absolute right-5 text-[#94A2BC] size-5 font-bold" />
                </div>
            </div>
            <div className='grid mq:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start sm:gap-[18px] gap-2'>
                <div
                    onClick={() => {
                        navigate('/notes/newnote')
                        window.scrollTo(0, 0)
                    }}
                    className='border-dashed self-center mx-auto sm:py-[43px] cursor-pointer py-[28px] sm:w-[150px] w-[103px] sm:px-10 px-[20px] flex flex-col text-center items-center justify-center gap-2 rounded-2xl border-[#2525254D] border-[1.4px]'>
                    <img className='size-5' src={NoteEdit} alt="" />
                    <p className='text-[#252525CC] sm:text-[16px] text-[12px] font-[450]'>New Note</p>
                </div>

                {clientNotes.map((notes, i) => (
                    <div key={i} className='py-6 px-3 flex flex-col gap-6 bg-[#0098D95E] rounded-[10px]'>
                        <div className='flex flex-col gap-1'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>
                                {new Date(notes.date_created).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}
                            </p>
                            <div className='flex justify-between w-full items-center'>
                                <p className='sm:text-[20px] text-[14px] text-[#252525] font-[450]'>{notes.Description}</p>
                                <BsThreeDots className='cursor-pointer' />
                            </div>
                        </div>
                        <hr className='border border-[#25252533]' />
                        <p className='text-[#25252580] sm:text-[15px] text-[12px] font-normal'>
                            {notes.Note}
                        </p>
                        <div className='flex justify-between'>
                            <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>12:30 PM, Monday</p>
                            <img className='size-5 sm:block cursor-pointer hidden' src={NoteEdit} alt="" />
                        </div>
                    </div>
                ))}

                {/* <div className='py-6 px-3 flex flex-col gap-6 bg-[#0098D95E] rounded-[10px]'>
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
                </div> */}
            </div>
        </div>
    )
}

export default AllNotes