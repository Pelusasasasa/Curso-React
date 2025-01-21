import { addHours } from "date-fns";

export const events = [
    {
        id: 1,
        title: 'Cumpleaños del Jefe',
        notes: 'Hay que comprar el pastel',
        state: new Date('2022-10-01 13:00:00'),
        end: new Date('2022-10-01 15:00:00'),
    },
    {
        id: 2,
        title: 'Cumpleaños del Jefe 2',
        notes: 'Hay que comprar el pastel 2',
        state: new Date('2022-11-15 13:00:00'),
        end: new Date('2022-11-15 15:00:00'),
    }
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
};

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
};

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0]}
}