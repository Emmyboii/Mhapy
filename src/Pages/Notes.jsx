import { useState } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AllNotes from '../Components/AllNotes';
import MiniNote from '../Components/MiniNote';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { useNavigationType } from 'react-router-dom';
import RecentlyDeleted from '../Components/RecentlyDeleted';
import NoteCategory from '../Components/NoteCategory';
import Favourites from '../Components/Favourites';
import EditNote from '../Components/EditNote';
import AddNote from '../Components/AddNote';

const Notes = () => {

    const navigate = useNavigate()

    // const location = useLocation();
    // const navigationType = useNavigationType();
    // const isReload = useMemo(() => {
    //     return performance.getEntriesByType("navigation")[0]?.type === "reload";
    // }, []);

    const [noteFrame, setNoteFrame] = useState(() => {
        return localStorage.getItem('noteFrame') || 'note'
    })

    // const [addNotes, setAddNotes] = useState(() => {
    //     const stored = localStorage.getItem('addOrEditNote');
    //     return stored ? JSON.parse(stored) : false;
    // })

    // const [notes, setNotes] = useState(() => {
    //     return localStorage.getItem('allOrDeleted') || ''
    // })

    // useEffect(() => {
    //     localStorage.setItem('noteFrame', noteFrame);
    // }, [noteFrame]);

    // useEffect(() => {
    //     localStorage.setItem('allOrDeleted', notes);
    // }, [notes]);

    // useEffect(() => {
    //     const resetNotes = () => {
    //         localStorage.setItem('allOrDeleted', '');
    //         setNotes('');
    //         window.scrollTo(0, 0);
    //     };

    //     const restoreNotes = () => {
    //         localStorage.setItem('allOrDeleted', notes);
    //         setNotes(notes);
    //         window.scrollTo(0, 0);
    //     };

    //     // Browser/mobile back button
    //     if (!isReload && location.pathname === '/notes' && navigationType === 'POP') {
    //         if (notes === '' || !addNotes) resetNotes();
    //         else if (notes === 'all' || notes === 'deleted') restoreNotes();
    //     }

    //     // Desktop backspace key
    //     const handleBackspace = (e) => {
    //         if (e.key === 'Backspace' && location.pathname === '/notes') {
    //             if (notes === '' || !addNotes) resetNotes();
    //             else if (notes === 'all' || notes === 'deleted') restoreNotes();
    //         }
    //     };

    //     window.addEventListener('keydown', handleBackspace);
    //     return () => window.removeEventListener('keydown', handleBackspace);
    // }, [location, navigationType, isReload, notes, setNotes, addNotes]);

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
            <h1 className="text-[18px] text-[#252525] mk:hidden block font-medium mb-4">Notes</h1>
            <div className="flex items-center sm:gap-10 gap-3 mb-6 bg-[#F6F6F6] text-[#25252580] p-[9px] rounded-[10px] sm:w-[419px] w-full justify-between">
                <p
                    className={`cursor-pointer py-2 px-5 ${noteFrame === 'note' ? 'bg-white rounded-lg' : ''}`}
                    onClick={() => {
                        navigate('/notes')
                        localStorage.setItem('noteFrame', 'note')
                        setNoteFrame('note')
                    }}
                >
                    Notes
                </p>
                <p
                    className={`cursor-pointer py-2 px-5 ${noteFrame === 'category' ? 'bg-white rounded-lg' : ''}`}
                    onClick={() => {
                        navigate('/notes')
                        localStorage.setItem('noteFrame', 'category')
                        setNoteFrame('category')
                    }}
                >
                    Categories
                </p>
                <p
                    className={`cursor-pointer py-2 px-5 ${noteFrame === 'favorite' ? 'bg-white rounded-lg' : ''}`}
                    onClick={() => {
                        navigate('/notes')
                        localStorage.setItem('noteFrame', 'favorite')
                        setNoteFrame('favorite')
                    }}
                >
                    Favorites
                </p>
            </div>

            {noteFrame === 'note' ? (
                <Routes>
                    <Route index element={<MiniNote />} />
                    <Route path='allnotes' element={<AllNotes />} />
                    <Route path='editnote' element={<EditNote />} />
                    <Route path='newnote' element={<AddNote />} />
                    <Route path='deleted' element={<RecentlyDeleted />} />
                </Routes>
            ) : noteFrame === 'category' ? (
                <Routes>
                    <Route index element={<NoteCategory />} />
                </Routes>
            ) : (
                <Routes>
                    <Route index element={<Favourites />} />
                    <Route path='editnote' element={<EditNote />} />
                    <Route path='newnote' element={<AddNote />} />
                </Routes>
            )}
            <Routes>

            </Routes>
        </div>
    )
}

export default Notes