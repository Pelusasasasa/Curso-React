import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe(' Pruebas en el GifExpertApp', () => {

    test('Hacer match con el snapchot', () => {

        const {container} =  <GifExpertApp />;

        expect(container).toMatchSnapshot();
        
    });

});