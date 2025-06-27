import avatar from '../Images/avatar.svg';
import camera from '../Images/camera.svg';
import edit from '../Images/edit.svg';

const Profile = () => {
    return (
        <div className=''>
            <div className='flex flex-col gap-4'>
                <h1 className="text-[24px] text-[#252525] mk:hidden block font-medium mb-2">Client Information</h1>
                <div className='border border-[#25252533] sd:rounded-[24px] rounded-md flex flex-col gap-4 sd:py-[30px] py-4 sd:px-[50px] px-5'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-4 items-center'>
                            <div className='relative cursor-pointer'>
                                <img className='sd:size-[99px] size-[70px]' src={avatar} alt="" />
                                <img className='size-[38px] top-1 left-[-15px] absolute' src={camera} alt="" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-[14px] sd:text-[20px] font-medium text-[#252525]'>Sandra Future</p>
                                <p className='text-[12px] sd:text-[17px] font-medium text-[#25252580]'>Lead Therapist</p>
                                <p className='text-[12px] sd:text-[17px] font-medium text-[#25252580]'>Leeds, United Kingdom</p>
                            </div>
                        </div>
                        <div className="text-[16px] cursor-pointer gap-1 font-normal sd:py-[5px] py-[2px] sd:px-[21px] px-[14px] flex items-center justify-center rounded-[20px] text-[#441890] bg-[#ffffff] border-[0.8px] border-[#441890]">
                            <p>Edit</p>
                            <img src={edit} alt="" />
                        </div>
                    </div>
                </div>
                <div className='border border-[#25252533] sd:rounded-[20px] rounded-md flex flex-col gap-[26px] sd:py-[30px] p-[20px] sd:px-[50px]'>
                    <p className='text-[24px] sd:block hidden font-medium text-[#252525]'>Personal Information</p>
                    <div className='flex justify-between items-start w-full'>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Full Name</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Sandra Future</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Email</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>sandrafuture@gmail.com</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Position</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Lead Therapist</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>User Name</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Sandra Future</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Phone Number</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>+2349098776654</p>
                            </div>
                        </div>
                        <div className="text-[16px] cursor-pointer gap-1 font-normal py-[5px] px-[21px] sd:flex hidden items-center justify-center rounded-[20px] text-[#441890] bg-[#ffffff] border-[0.8px] border-[#441890]">
                            <p>Edit</p>
                            <img src={edit} alt="" />
                        </div>
                    </div>
                </div>
                <div className='border border-[#25252533] sd:rounded-[20px] rounded-md flex flex-col gap-[26px] sd:py-[30px] p-[20px] sd:px-[50px]'>
                    <p className='text-[24px] sd:block hidden font-medium text-[#252525]'>Address</p>
                    <div className='flex justify-between items-start w-full'>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Country</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>United Kingdom</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>Postal Code</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>#12345</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[33px]'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-xs md:text-[14px] font-medium text-[#25252580]'>City</p>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#252525]'>Leeds, East London</p>
                            </div>
                        </div>
                        <div className="text-[16px] cursor-pointer gap-1 font-normal py-[5px] px-[21px] sd:flex hidden items-center justify-center rounded-[20px] text-[#441890] bg-[#ffffff] border-[0.8px] border-[#441890]">
                            <p>Edit</p>
                            <img src={edit} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile