
test('Esta prueba no debe de falla',() => {
    
    //1.Inicializacion
    const message1 = 'Hola Mundo'
    //2.Estimulo
    const message2 = message1.trim();
    //3.Observar el compartamiento
    expect(message1).toBe(message2);
})