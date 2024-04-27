import { act,renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe(' Testeando el UseForm', () => {

    const initial = {
        name: 'Agustin',
        email: 'XXXXXXXXXXXXXXXXX'
    }

    test(' Debe de regrasar la informacion por defecto', () => {

        const {result} = renderHook(() => useForm(initial));
        
        expect(result.current).toEqual({
            name: initial.name,
            email: initial.email,
            formState: initial,
            onInputChange: expect.any(Function),
            resetForm: expect.any(Function)
        })
    });

    test(' Debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';

        const {result} = renderHook(() => useForm(initial));
        const {onInputChange} = result.current;

        act(() =>{
            onInputChange({
                target: {name: 'name', value: newValue}
            });
        });
        expect(result.current.name).toBe(newValue);
    });

    test(' Debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';

        const {result} = renderHook(() => useForm(initial));
        const {onInputChange,resetForm} = result.current;

        act(() =>{
            onInputChange({
                target: {name: 'name', value: newValue}
            });

            resetForm();
        });
        expect(result.current.name).toBe(initial.name);
    });

});