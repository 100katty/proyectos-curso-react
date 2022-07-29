import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba en 08-imp-exp', () => {
    test('gestHeroeByid debe de retornar un heroe por ID', () => {
      
        const id = 1;
        const hero = getHeroeById(id);
         
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'})
    });

    test('gestHeroeByid debe de retornar undefine si no exite hero bi id', () => {
      
        const id = 100;
        const hero = getHeroeById(id);
         
        expect(hero).toBeFalsy();


    });

     test('gestHeroeByowner debe de retornar  si no exite hero by owner', () => {
      
        const owner = 'DC';
         const heros = getHeroesByOwner(owner);
         //console.log(heros);
         expect(heroes.length).toBe(3);
         expect(heros).toEqual([{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}])
         expect (heroes).toEqual(heros.filter((heroe)=> heroe.owner === owner))
     });
    
     test('gestHeroeByowner debe de retornar  si no exite hero by owner  por Marvel', () => {
      
         const owner = 'Marvel';
         
         const heros = getHeroesByOwner(owner);
         expect(heroes.length).toBe(2);
         expect(heros).toEqual([
         { id: 2, name: 'Spiderman', owner: 'Marvel' },
              { id: 5, name: 'Wolverine', owner: 'Marvel' }])
         expect (heroes).toEqual(heros.filter((heroe)=> heroe.owner === owner))
         
        
         
    });
});