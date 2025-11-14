import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useMediaQuery } from 'react-responsive';

const Calendar = () => {
  const lg = useMediaQuery({ minWidth: 1024 });
  const md = useMediaQuery({ minWidth: 768 });

  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendar]}
      initialView={lg ? 'dayGridMonth' : md ? 'dayGridWeek' : 'dayGridDay'}
      buttonText={{
        today: 'Today',
      }}
      eventInteractive
      viewClassNames="calendar"
      events={{
        {title: "FCH District Glen Allen VA Event 2026", start: "2026-03-13", end: "2026-03-15"}
      }}
    />
  );
};

export default Calendar;
