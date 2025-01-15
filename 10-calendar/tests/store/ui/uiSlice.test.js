import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice";

describe('Pruebas en el UISLICE',() => {

    test('Debe de mostrar el componente por defecto', () => {

        expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false})

    });

    test('Debe de cambiar el isDateModalOpen correctanete', () => { 
        let state = uiSlice.getInitialState();

        state = uiSlice.reducer(state, onOpenDateModal);

        expect(state.isDateModalOpen).toBeTruthy();

        state = uiSlice.reducer(state, onCloseDateModal);

        expect(state.onCloseDateModal).toBeFalsy();
     })
});