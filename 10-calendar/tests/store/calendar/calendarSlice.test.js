import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvent, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../__fixtures/calendarState";

describe(' Pruebas en el calendarSlice', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState )

    });

    test('onSetActiveEvent debe de activar el evento', () => { 
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0] ));
        expect( state.activeEvent ).toEqual( events[0] )
    });

    test('onAddNewEvent debe de agregar el evento', () => {
        const newEvent = {
            id: 3,
            title: 'Handball',
            notes: 'Hay que comprar el pastel',
            state: new Date('2020-10-01 13:00:00'),
            end: new Date('2020-10-01 15:00:00'),
        };

        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent));
        expect(state.events).toEqual([ ...events, newEvent]);
    });

    test('onUpdateEvente debe de actaulizar el evento', () => {
        const updateEvent = {
            id: 1,
            title: 'Handball Actualizado',
            notes: 'Hay que comprar el pastel Acttualizado',
            state: new Date('2020-10-01 13:00:00'),
            end: new Date('2020-10-01 15:00:00'),
        };

        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updateEvent));
        expect(state.events).toContain( updateEvent );
    });

    test('onDeleteEvent debe de borrar el evento Activo', () => { 
        const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent());
        expect( state.activeEvent ).toBeNull();
     });

     test('onLoadEvents debe de establecer los eventos', () => {

        const state = calendarSlice.reducer( initialState, onLoadEvent(events));
        expect(state.events).toEqual( events );
     });

     test('onLogoutCalendar debe de limpiar el estado', () => {

        const state = calendarSlice.reducer( calendarWithEventsState, onLogoutCalendar());

        expect( state).toEqual( initialState );

     });
});