// Fully Working Microsoft Word-like Rich Text Editor (With Per-Note Styling Saved in localStorage)
import { useRef, useState, useEffect } from 'react';
import a from '../Images/1.svg'; // Ordered list
import b from '../Images/2.svg'; // Unordered list
import c from '../Images/3.svg'; // Font size icon (Large T)
import d from '../Images/4.svg'; // Link
import e from '../Images/5.svg'; // Image
import back from '../Images/back.svg';
import front from '../Images/front.svg';
import bold from '../Images/bold.svg';
import italic from '../Images/italic.svg';
import underline from '../Images/underline.svg';
import Star from '../Images/Star.svg';
import Star2 from '../Images/star3.png';
import { FaCircle } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AddNote = ({ noteId = '1' }) => {
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const [bg, setBg] = useState('#ffffff');
    const [active, setActive] = useState({});
    const [title, setTitle] = useState('');
    const [onSave, setOnSave] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();

    // Load style from localStorage
    useEffect(() => {
        const styles = JSON.parse(localStorage.getItem('noteStyles') || '[]');
        const noteStyle = styles.find((s) => s.id === noteId);
        if (noteStyle?.bgColor) setBg(noteStyle.bgColor);
        if (noteStyle?.favorite) setFavorite(true);
    }, [noteId]);

    const saveStyleToLocalStorage = (bgColor, fav = favorite) => {
        const styles = JSON.parse(localStorage.getItem('noteStyles') || '[]');
        const updatedStyles = styles.filter((s) => s.id !== noteId);
        updatedStyles.push({ id: noteId, bgColor, favorite: fav });
        localStorage.setItem('noteStyles', JSON.stringify(updatedStyles));
    };

    useEffect(() => {
        saveStyleToLocalStorage(bg, favorite);
    }, []);


    const exec = (cmd, val = null) => {
        document.execCommand(cmd, false, val);
        editorRef.current?.focus();
    };

    const toggleCommand = (cmd) => {
        exec(cmd);
        setActive((prev) => ({ ...prev, [cmd]: document.queryCommandState(cmd) }));
    };

    const handleImageInsert = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => exec('insertImage', e.target.result);
        reader.readAsDataURL(file);
    };

    const handleLinkInsert = () => {
        const url = prompt('Enter URL');
        if (url) exec('createLink', url);
    };

    useEffect(() => {
        const update = () => {
            setActive({
                bold: document.queryCommandState('bold'),
                italic: document.queryCommandState('italic'),
                underline: document.queryCommandState('underline'),
                insertOrderedList: document.queryCommandState('insertOrderedList'),
                insertUnorderedList: document.queryCommandState('insertUnorderedList'),
            });
        };
        document.addEventListener('selectionchange', update);
        return () => document.removeEventListener('selectionchange', update);
    }, []);

    useEffect(() => {
        const editor = editorRef.current;
        editor?.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        if (editor?.childNodes.length > 0) {
            range.setStart(editor, 0);
            range.collapse(true);
            sel?.removeAllRanges();
            sel?.addRange(range);
        }
    }, []);

    useEffect(() => {
        const editor = editorRef.current;
        editor?.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        if (editor?.childNodes.length > 0) {
            range.setStart(editor, 0);
            range.collapse(true);
            sel?.removeAllRanges();
            sel?.addRange(range);
        }
    }, []);


    const handleSave = async () => {
        const htmlContent = editorRef.current?.innerHTML || '';

        const token = localStorage.getItem('token')

        if (!editorRef.current || editorRef.current.innerText.trim() === '' || title.trim() === '') return

        setIsSaving(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/clients/6838188b-da3b-454b-9b5a-3764dd858b87/generate_client_clinical_recommendation_note`, {
                method: 'POST',
                headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: title,
                    prompt: htmlContent,
                }),
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText || 'Failed to save note');
            }

            const data = await res.json();
            console.log('Note saved:', data);

            setSuccessMsg('✅ Note saved successfully!');
            setTimeout(() => {
                setSuccessMsg(''); // clear the message
                navigate('/notes/allnotes'); // redirect to /notes
            }, 3000)
        } catch (err) {
            console.error('Failed to save note:', err);
            setErrorMsg('❌ Failed to save note. Please try again.');
            setTimeout(() => setErrorMsg(''), 4000);
        } finally {
            setIsSaving(false);
        }
    };

    // useEffect(() => {
    //     if (successMsg) {
    //         const timer = setTimeout(() => {
    //             setSuccessMsg(''); // clear the message
    //             navigate('/notes/allnotes'); // redirect to /notes
    //         }, 3000); // 3 seconds

    //         return () => clearTimeout(timer); // clean up
    //     }
    // }, [successMsg, navigate]);


    const getBtnClass = (key) => `cursor-pointer sm:size-[25px] size-[19px] p-1 rounded ${active[key] ? 'bg-gray-300' : ''}`;

    const handleBgChange = (color) => {
        setBg(color);
        saveStyleToLocalStorage(color);
    };

    const toggleFavorite = () => {
        const newFav = !favorite;
        setFavorite(newFav);
        saveStyleToLocalStorage(bg, newFav);
    };


    return (
        <div className='bg-[#2525250D] rounded-[10px] p-4 relative flex flex-col gap-4'>
            {/* Toolbar */}
            {successMsg && (
                <p className="text-green-600 absolute text-[20px] top-[-40px] text-right mr-3">{successMsg}</p>
            )}
            {errorMsg && <p className="text-red-500 absolute text-[20px] top-[-40px] text-sm text-right mr-3">{errorMsg}</p>}

            <div className='flex justify-between items-start rounded-lg py-2 px-4' style={{ backgroundColor: bg }}>
                <div className='flex flex-wrap items-center gap-4'>
                    <img onClick={() => toggleCommand('bold')} className={getBtnClass('bold')} src={bold} alt='Bold' />
                    <img onClick={() => toggleCommand('italic')} className={getBtnClass('italic')} src={italic} alt='Italic' />
                    <img onClick={() => toggleCommand('underline')} className={getBtnClass('underline')} src={underline} alt='Underline' />
                    <img onClick={() => toggleCommand('insertOrderedList')} className={getBtnClass('insertOrderedList')} src={a} alt='OL' />
                    <img onClick={() => toggleCommand('insertUnorderedList')} className={getBtnClass('insertUnorderedList')} src={b} alt='UL' />
                    <img onClick={() => exec('fontSize', 5)} className={getBtnClass('fontSize')} src={c} alt='Font Size' />
                    <img onClick={handleLinkInsert} className={getBtnClass('link')} src={d} alt='Link' />
                    <img onClick={() => fileInputRef.current.click()} className={getBtnClass('image')} src={e} alt='Img' />
                    <input type='file' ref={fileInputRef} className='hidden' accept='image/*' onChange={(e) => handleImageInsert(e.target.files[0])} />
                </div>

                <div className='flex gap-3'>
                    <FaCircle onClick={() => handleBgChange('#ffffff')} className='text-white border border-[#00000033] rounded-full text-[18px] cursor-pointer' />
                    <FaCircle onClick={() => handleBgChange('#FFEC9E')} className='text-[#FFEC9E] border border-[#00000033] rounded-full text-[18px] cursor-pointer' />
                    <FaCircle onClick={() => handleBgChange('#A1D9F1')} className='text-[#A1D9F1] border border-[#00000033] rounded-full text-[18px] cursor-pointer' />
                    <FaCircle onClick={() => handleBgChange('#FFB7B8')} className='text-[#FFB7B8] border border-[#00000033] rounded-full text-[18px] cursor-pointer' />
                </div>

                <div className='flex gap-2'>
                    <img onClick={() => exec('undo')} className='cursor-pointer sm:size-[18px] size-[15px]' src={back} alt='Undo' />
                    <img onClick={() => exec('redo')} className='cursor-pointer sm:size-[18px] size-[15px]' src={front} alt='Redo' />
                </div>
            </div>

            {/* Editor */}
            <div className='rounded-lg p-4 flex flex-col gap-2' style={{ backgroundColor: bg }}>
                <div className='flex justify-between items-center'>
                    <input type="text" style={{ backgroundColor: bg }} onChange={(e) => setTitle(e.target.value)} value={title} id="title" className='text-lg text-[#25252580] font-medium outline-none border-none' placeholder='Title' />
                    <div className='flex sr:flex-row flex-col items-center gap-3'>
                        <img
                            onClick={toggleFavorite}
                            className={`cursor-pointer sh:size-[23px] size-[19px]`}
                            src={favorite ? Star2 : Star}
                            alt='Favorite Star'
                        />
                        <div className='relative'>
                            <BsThreeDots onClick={() => setOnSave(!onSave)} className='cursor-pointer' />
                            {onSave && (
                                <button
                                    onClick={handleSave}
                                    className={`bg-white p-1 px-3 left-[-20px] top-5 absolute border border-black/60 rounded-lg ${!editorRef.current || editorRef.current.innerText.trim() === '' || title.trim() === '' || isSaving ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    disabled={!editorRef.current || editorRef.current.innerText.trim() === '' || title.trim() === '' || isSaving}
                                >
                                    {isSaving ? 'Saving...' : 'Save'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <p className='text-xs sm:text-sm text-[#25252580]'>
                    {new Date().toLocaleString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        weekday: 'long',
                        hour12: true,
                    })}
                </p>

                <hr className='border border-[#25252533] mt-1' />

                <div
                    contentEditable
                    suppressContentEditableWarning
                    ref={editorRef}
                    className='min-h-[500px] w-full p-4 focus:outline-none [&_ol]:list-decimal [&_ul]:list-disc [&_ul_li]:ml-8 [&_ol_li]:ml-8'
                    style={{ backgroundColor: bg, color: 'black' }}
                ></div>
            </div>
        </div>
    );
};

export default AddNote;
