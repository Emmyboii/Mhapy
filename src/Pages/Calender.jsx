import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import './calendar.css'; // We'll style this below


// const CustomDateHeader = ({ label, date }) => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center h-full"
//       style={{ minHeight: '60px' }} // ensure enough height
//     >
//       <div className="text-xs font-bold text-gray-600 leading-none">
//         {format(date, 'EEE').toUpperCase()}
//       </div>
//       <div className="text-base font-medium text-black leading-none">
//         {format(date, 'd')}
//       </div>
//     </div>
//   );
// };

const CustomToolbar = ({ label, onNavigate, onView, view }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-3 border-b">
      {/* View buttons left */}
      <div className="flex gap-2">
        {['month', 'week', 'day'].map((v) => (
          <button
            key={v}
            onClick={() => onView(v)}
            className={`px-3 py-1 rounded ${view === v ? 'bg-blue-600 text-white' : 'bg-white border text-gray-700'
              }`}
          >
            {v.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Center title */}
      <div className="text-lg font-bold text-gray-800">{label}</div>

      {/* Navigation buttons right */}
      <div className="flex gap-2">
        <button onClick={() => onNavigate('TODAY')} className="bg-white border px-3 py-1 rounded">
          Today
        </button>
        <button onClick={() => onNavigate('PREV')} className="bg-white border px-3 py-1 rounded">
          ←
        </button>
        <button onClick={() => onNavigate('NEXT')} className="bg-white border px-3 py-1 rounded">
          →
        </button>
      </div>
    </div>
  );
};

const Calender = () => {

  // const [date, setDate] = useState(new Date());
  // const [view, setView] = useState('week');

  const events=[
    {
      title: 'Meeting with wmmy',
      start: new Date(2025, 5, 28, 10, 0),
      end: new Date(2025, 5, 28, 11, 0),
    },
    {
      title: 'Meeting with Dan',
      start: new Date(2025, 5, 22, 10, 0),
      end: new Date(2025, 5, 22, 11, 0),
    },
    {
      title: 'Meeting with Ezzy',
      start: new Date(2025, 5, 25, 10, 0),
      end: new Date(2025, 5, 25, 11, 0),
    },
    {
      title: 'Meeting with John',
      start: new Date(2025, 5, 23, 10, 0),
      end: new Date(2025, 5, 23, 11, 0),
    },
    {
      title: 'Meeting with Eli',
      start: new Date(2025, 5, 27, 5, 0),
      end: new Date(2025, 5, 27, 7, 0),
    },
    {
      title: 'Design Review',
      start: new Date(2025, 5, 29, 12, 0),
      end: new Date(2025, 5, 29, 13, 30),
    },
  ];


  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        slotDuration="01:00:00"
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',
          right: 'prev,next today',
        }}
        nowIndicator={true}
        scrollTime={new Date().toTimeString().slice(0, 5)} // scroll to current time
        slotMinTime="06:00:00"
        slotMaxTime="20:00:00"
        events={events}
        height="auto"
      />
    </div>
  );
}

export default Calender