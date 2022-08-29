import { render , screen ,fireEvent} from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas el component getGifts', () => {
    
    test('debe de retornar el arreglo de gifs', async () => {
        
        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
       
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });

    
    
   
    
});
