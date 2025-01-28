const { render, screen } = require("@testing-library/react");
const { FabDelete } = require("../../../src/calendar/components/FabDelete");
const { Provider } = require("react-redux");
const { store } = require("../../../src/store");

describe('Pruebas en el componente', () => {

    test('Debe de mostrar el componente Correctamente', () => { 

        render(
            <Provider store={store}>
                <FabDelete />
            </Provider>
        )
        screen.debug();
        
     });
});


