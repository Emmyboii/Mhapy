import { useEffect, useMemo, useState } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AllNotes from '../Components/AllNotes';
import EditOrAddNote from '../Components/EditOrAddNote';
import MiniNote from '../Components/MiniNote';
import { useLocation } from 'react-router-dom';
import { useNavigationType } from 'react-router-dom';
import RecentlyDeleted from '../Components/RecentlyDeleted';
import NoteCategory from '../Components/NoteCategory';
import Favourites from '../Components/Favourites';

const Notes = () => {

    const location = useLocation();
    const navigationType = useNavigationType();
    const isReload = useMemo(() => {
        return performance.getEntriesByType("navigation")[0]?.type === "reload";
    }, []);

    const [noteFrame, setNoteFrame] = useState(() => {
        return localStorage.getItem('noteFrame') || 'note'
    })

    const [addNotes, setAddNotes] = useState(() => {
        const stored = localStorage.getItem('addOrEditNote');
        return stored ? JSON.parse(stored) : false;
    })

    const [notes, setNotes] = useState(() => {
        return localStorage.getItem('allOrDeleted') || ''
    })

    useEffect(() => {
        localStorage.setItem('noteFrame', noteFrame);
    }, [noteFrame]);

    useEffect(() => {
        localStorage.setItem('allOrDeleted', notes);
    }, [notes]);

    useEffect(() => {
        const resetNotes = () => {
            localStorage.setItem('allOrDeleted', '');
            setNotes('');
            window.scrollTo(0, 0);
        };

        const restoreNotes = () => {
            localStorage.setItem('allOrDeleted', notes);
            setNotes(notes);
            window.scrollTo(0, 0);
        };

        // Browser/mobile back button
        if (!isReload && location.pathname === '/notes' && navigationType === 'POP') {
            if (notes === '' || !addNotes) resetNotes();
            else if (notes === 'all' || notes === 'deleted') restoreNotes();
        }

        // Desktop backspace key
        const handleBackspace = (e) => {
            if (e.key === 'Backspace' && location.pathname === '/notes') {
                if (notes === '' || !addNotes) resetNotes();
                else if (notes === 'all' || notes === 'deleted') restoreNotes();
            }
        };

        window.addEventListener('keydown', handleBackspace);
        return () => window.removeEventListener('keydown', handleBackspace);
    }, [location, navigationType, isReload, notes, setNotes, addNotes]);

    // const setttings = {
    //     dot: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     swipeToSlide: false
    // }

    return (
        <div>
            <div className="flex items-center sm:gap-10 gap-3 mb-6 bg-[#F6F6F6] text-[#25252580] p-[9px] rounded-[10px] sm:w-[419px] w-full justify-between">
                <p
                    className={`cursor-pointer py-2 px-5 ${noteFrame === 'note' ? 'bg-white rounded-lg' : ''}`}
                    onClick={() => {
                        localStorage.setItem('noteFrame', 'note')
                        setNoteFrame('note')
                        setAddNotes(false)
                        localStorage.setItem('addOrEditNote', JSON.stringify(false))
                    }}
                >
                    Notes
                </p>
                <p
                    className={`cursor-pointer py-2 px-5 ${noteFrame === 'category' ? 'bg-white rounded-lg' : ''}`}
                    onClick={() => {
                        localStorage.setItem('noteFrame', 'category')
                        setNoteFrame('category')
                    }}
                >
                    Categories
                </p>
                <p
                    className={`cursor-pointer py-2 px-5 ${noteFrame === 'favorite' ? 'bg-white rounded-lg' : ''}`}
                    onClick={() => {
                        localStorage.setItem('noteFrame', 'favorite')
                        setNoteFrame('favorite')
                    }}
                >
                    Favorites
                </p>
            </div>
            {noteFrame === 'note' ? (
                <div>
                    {notes === 'all' ? (
                        <>
                            {addNotes ? (
                                <EditOrAddNote setNotes={setNotes} setAddNotes={setAddNotes} />
                            ) : (
                                <AllNotes setAddNotes={setAddNotes} />
                            )}
                        </>
                    ) : notes === 'deleted' ? (
                        <>
                            {addNotes ? (
                                <EditOrAddNote setNotes={setNotes} setAddNotes={setAddNotes} />
                            ) : (
                                <RecentlyDeleted setAddNotes={setAddNotes} />
                            )}
                        </>
                    ) : (
                        <>
                            {addNotes ? (
                                <EditOrAddNote setNotes={setNotes} setAddNotes={setAddNotes} />
                            ) : (
                                <MiniNote setNotes={setNotes} setAddNotes={setAddNotes} />
                            )}
                        </>
                    )}
                </div>
            ) : noteFrame === 'category' ? (
                <NoteCategory />
            ) : (
                <Favourites setAddNotes={setAddNotes} />

            )}
        </div>
    )
}

export default Notes