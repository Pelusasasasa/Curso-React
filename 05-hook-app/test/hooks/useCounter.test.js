const { render, act, renderHook } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe(' pruebas en el use counter ', () => {

    test('debe de retornar el valor por defecto', () => { 

        const {result} = renderHook(() => useCounter());
        const {counter, increment, decrement,reset} = result.current;

        expect(counter).toBe(10);

        expect(increment).toEqual( expect.any(Function) );
        expect(decrement).toEqual( expect.any(Function) );
        expect(reset).toEqual( expect.any(Function) );

     });


     test(' Debe de generar el counter ocn el valor de 100', () => {

        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);

     });


     test(' Debe de incrementar el contador', () => {

        const {result} = renderHook(() => useCounter(100));
        const {counter, increment} = result.current;

        act( () => {
            increment();
        });

        expect(result.current.counter).toBe(101);
     });

     test(' Debe de decrementar el contador', () => {

        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement} = result.current;

        act( () => {
            decrement();
        });

        expect( result.current.counter).toBe(99);

     });

     test(' Debe de resetear el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, reset, increment} = result.current;

        act(() => {
            increment();
        });

        act(() => {
            reset();
        });

        expect( result.current.counter).toBe(100)
     })

});