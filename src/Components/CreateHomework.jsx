import a from '../Images/1.svg';
import b from '../Images/2.svg';
import c from '../Images/3.svg';
import d from '../Images/4.svg';
import e from '../Images/5.svg';
import back from '../Images/back.svg';
import paragraph from '../Images/paragraph.svg';
import shortAns from '../Images/shortAns.svg';
import checkbox from '../Images/checkbox.svg';
import front from '../Images/front.svg';
import bold from '../Images/bold.svg';
import italic from '../Images/italic.svg';
import underline from '../Images/underline.svg';
import trash from '../Images/trash.svg';
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';

const CreateHomework = () => {

    const [optionFormat, setOptionFormat] = useState(false)

    const [questions, setQuestions] = useState([
        { question: '', options: [''] }
    ])

    const addQuestion = () => {
        setQuestions([...questions, { question: '', options: [''] }]);
    };

    const addOption = (index) => {
        const updated = [...questions];
        updated[index].options.push('');
        setQuestions(updated);
    };

    const handleQuestionChange = (index, value) => {
        const updated = [...questions];
        updated[index].question = value;
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[oIndex] = value;
        setQuestions(updated);
    };

    return (
        <div className='flex flex-col items-start gap-[14px]'>
            {questions.map((q, qIndex) => (
                <div key={qIndex} className='bg-[#2525250D] w-full rounded-[10px] p-[13px] flex flex-col gap-[14px]'>
                    <div
                        className="flex md:items-center items-start justify-between bg-white rounded-[10px] py-[10px] px-[17px]"
                    >
                        <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-3">
                            <div className="flex items-center sm:gap-10 sa:gap-5 gap-3">
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={bold} alt="" />
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={italic} alt="" />
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={underline} alt="" />
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={a} alt="" />
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={b} alt="" />
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={c} alt="" />
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={d} alt="" />
                                <img className="cursor-pointer sm:size-[18px] size-[15px]" src={e} alt="" />
                            </div>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <img className="cursor-pointer sm:size-[18px] size-[15px]" src={back} alt="" />
                            <img className="cursor-pointer sm:size-[18px] size-[15px]" src={front} alt="" />
                        </div>
                    </div>
                    <div
                        className="rounded-[10px] p-6 flex bg-white flex-col gap-2"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-[20px] text-[#25252580] font-[450]">{`Question ${qIndex + 1}`}</p>
                            <div className="flex items-center gap-4">
                                <img className="cursor-pointer sh:size-[23px] size-[19px]" src={trash} alt="" />
                            </div>
                        </div>
                        <p className='sm:text-[13px] text-[10px] text-[#25252580] font-normal'>Write out your client question below</p>
                        <hr className='border border-[#25252533] mt-1' />
                        <textarea
                            className="min-h-[85px]  w-full py-2 resize-none focus:outline-none"
                            placeholder='Enter Question'
                            value={q.question}
                            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                        />
                    </div>
                    {q.options.map((opt, optIndex) => (
                        <div key={optIndex} className='flex flex-col gap-[14px]'>
                            <div
                                className="rounded-[10px] p-6 flex bg-white flex-col gap-2"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-[20px] text-[#25252580] font-[450]">{`Option ${optIndex + 1}`}</p>
                                    <div className="flex items-center relative gap-4">
                                        <img className="cursor-pointer sh:size-[23px] size-[19px]" src={trash} alt="" />
                                        <BsThreeDots onClick={() => setOptionFormat(!optionFormat)} className="cursor-pointer text-[#25252580]" />
                                        {optionFormat && (
                                            <div className='rounded-[10px] absolute right-0 sh:top-[-1065%] top-[-1300%] py-[30px] w-[200px] px-[35px] flex flex-col border border-[#25252533] text-[#25252580] bg-[#FEFEFE] gap-5'>
                                                <div className='flex gap-4 cursor-pointer items-center'>
                                                    <input type="radio" name="" id="" disabled checked />
                                                    <p>Multiple choice</p>
                                                </div>
                                                <div className='flex gap-4 cursor-pointer items-center'>
                                                    <img className='size-4' src={checkbox} alt="" />
                                                    <p>Checkboxes</p>
                                                </div>
                                                <hr className='border border-[#25252533] mt-1' />
                                                <div className='flex gap-4 cursor-pointer items-center'>
                                                    <img className='size-4' src={shortAns} alt="" />
                                                    <p>Short answer</p>
                                                </div>
                                                <div className='flex gap-4 cursor-pointer items-center'>
                                                    <img className='size-4' src={paragraph} alt="" />
                                                    <p>Paragraph</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <hr className='border border-[#25252533] mt-1' />
                                <textarea
                                    className="min-h-[42px]  w-full py-2 resize-none focus:outline-none"
                                    placeholder='Enter Option'
                                    value={opt}
                                    onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                                />
                            </div>
                            <div className='flex gap-[14px] w-full'>
                                <button onClick={addQuestion} className='bg-white py-3 px-8 rounded-md w-full sm:w-auto text-[#25252580] sm:text-base text-sm font-[450]'>Add Questions</button>
                                <button onClick={() => addOption(qIndex)} className='bg-white py-3 px-8 rounded-md w-full sm:w-auto text-[#25252580] sm:text-base text-sm font-[450]'>Add Options</button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <button className='bg-[#441890] py-4 px-[30px] rounded-md text-[#ffffff] font-[450]'>Publish Homework</button>
        </div>
    )
}

export default CreateHomework