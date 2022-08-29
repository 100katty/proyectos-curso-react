import { render , screen ,fireEvent} from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas el component GifItem', () => {
    const title = 'hola'
    const url = 'https://jestjs.io/';
    test('debe de hacer con el snapshot', () => {

        const {container} = render(<GifItem title={title} url={url}  />)
        expect(container).toMatchSnapshot();
       
    });

    test('debe de mostrar la imagen con el url y al alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug();

        //expect(screen.getByRole('img').src).toBe(url)

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
    
   
    
});

