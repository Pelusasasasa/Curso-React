describe('Prueba en <DemoComponent />', () => {
    
    test('Esta prueba no dbee de fallar', () => {

        // 1. Inicialización
        const message1 = 'Hola Mundo';
    
        //2. Estimulu
        const message2 = message1.trim();
    
        //3. Observar el comportamiento esperado
        expect(message1).toBe(message2);
    
    });

});