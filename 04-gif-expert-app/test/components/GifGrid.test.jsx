import { render , screen ,fireEvent} from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');



describe('Pruebas el component GifGrid', () => {
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
       
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading:true
        })


        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText('Cargando..'));
        expect(screen.getByText(category));
       
    });

    test('debe de mostrar items cuando se cargan las images useFetchGifs', () => {

        const gifs = [
            {
            id: '124',
            title:'Saitama',
            url: 'https://localhost:3000'
            },
             {
            id: '112',
            title:'Saitama',
            url: 'https://localhost:3000'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading:false
        })

        render(<GifGrid category={category} />);
       // screen.debug();
        
        expect(screen.getAllByRole('img').length).toBe(2);
    });
    
    
   
    
});

