import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvent, onSetActiveEvent, onUpdateEvent } from '../store';
import calendarApi from '../api/calendarApi';
import { convertEventsToDate } from '../helpers';
import Swal from 'sweetalert2';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const {user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {


       try {
         // Todo bien
        if( calendarEvent.id ) {

            calendarApi.put(`events/${calendarEvent.id}`, calendarEvent);

            // Actualizando 
            dispatch( onUpdateEvent({ ...calendarEvent, user }) );
        } else {
            // Creando
            const { data  } = await calendarApi.post('events', calendarEvent);
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );
        };
       } catch (error) {
        console.log(error)
        Swal.fire('Error al guardar', error.response.data.msg, 'error');
       }
    }

    const startDeletingEvent = async () => {
        // Todo: Llegar al backend
        try {
            const {} = await calendarApi.delete(`events/${activeEvent.id}`)

            dispatch( onDeleteEvent() );
        } catch (error) {
            console.log(error)
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }
    };

    const startLoadingEvnets = async() => {
        try {
            const { data } = await calendarApi.get('events');
            const events = convertEventsToDate(data.eventos);
            
            dispatch( onLoadEvent( events ))
        } catch (error) {
            console.log('Error cargando Eventos')
            console.log(error)
            
        }
    }


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvnets,
    }
}
