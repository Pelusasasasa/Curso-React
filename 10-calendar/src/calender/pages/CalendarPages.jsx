import { Navbar, CalendarEvent, CalendarModal } from "../index";
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours} from "date-fns";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";

const events = [{
  title: "Cumpleaños del jefe",
  notes: "Hay que comprar el pastel",
  start: new Date(),
  end: addHours( new Date(), 2),
  user: {
    name: "Agustin"
  }
}]

export const CalenderPages = () => {

  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'week');
  
  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }
    return {
      style
    }
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event })
  };

  const onSelect = ( event ) => {
    console.log({click: event})
  };

  const onViewChange = ( event ) => {
    localStorage.setItem('lastView', event);
  };


  return (
    <>
      <Navbar />

      <Calendar
      culture="es"
      localizer={localizer}
      defaultView={lastView}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={getMessagesES()}
      style={{ height: 'calc( 100vh - 80px)' }}
      eventPropGetter={ eventStyleGetter }
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={ onDoubleClick }
      onSelectEvent={ onSelect }
      onView={ onViewChange }

    />

    <CalendarModal />

    </>
  )
}
