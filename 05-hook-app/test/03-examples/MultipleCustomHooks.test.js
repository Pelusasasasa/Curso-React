const { render, screen, fireEvent } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");
const { useFetch } = require("../../src/hooks/useFetch");
const { useCounter } = require("../../src/hooks/useCounter");

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks>', () => {
    
        const mockIncrement = jest.fn();

        useCounter.mockReturnValue( {
            counter:1,
            increment:mockIncrement
        });

        beforeEach(() => {
            jest.clearAllMocks();
        })
    
    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue( {
            data: null,
            isLoading: true,
            hasError: null
        });


        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading'));
        expect( screen.getByText('BreakingBad Notes'));
        
        const nextButton = screen.getByRole('button');
        expect( nextButton.disabled ).toBeTruthy();

        

     });

    // test('Debe de mosrar un Quote', () => { 

    //   useFetch.mockReturnValue( {
    //       data: [{author: 'Fernando', quote:'Hola Mundo'}],
    //       isLoading: true,
    //       hasError: null
    //   });

    //   render( <MultipleCustomHooks />);

    //   expect( screen.getByText('Hola Mundo') ).toBeTruthy();
    //   expect( screen.getByText('Fernando') ).toBeTruthy();

    //   const nextButton = screen.getByRole('button',{ name: 'Next quote'});
    //   expect(nextButton.disabled).toBeFalsy();

    // });


    test('Debe de llamar la funcion incrementar', () => {

        useFetch.mockReturnValue( {
            data: [{author: 'Fernando', quote:'Hola Mundo'}],
            isLoading: true,
            hasError: null
    });

    render( <MultipleCustomHooks/> );
    const nextButton = screen.getByRole('button', {name: 'Next quote'});
    fireEvent.click(nextButton);
    console.log(nextButton)
    

    expect(mockIncrement).toHaveBeenCalled();

    })

});