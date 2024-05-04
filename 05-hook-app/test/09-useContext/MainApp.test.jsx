import {render} from '@testing-library/react'
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp>', () => {

    test('Debe de mostrar el HomePage', () => { 

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        screen.debug();

     });

})