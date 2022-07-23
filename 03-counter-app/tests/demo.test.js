
test('Esta prueba no debe de falla',() => {
    
    if (1 === 0) {
        throw new Error('No puede dividir entre cero');
    }
})