import { render ,screen} from "@testing-library/react";
import { FirsApp } from "../src/FirsApp";

describe('Pruebas en <FirstApp />', () => {
    const title = 'Hola spy mundo';
    const subtitle = 'katty';
    

    test('debe de hacer match con el snapshot', () => {
    const {container} = render( <FirsApp title={title} subtitle={subtitle} />)
    expect(container).toMatchSnapshot();
        
    });

    test('debe de de mostrar el mensaje hola mundo', () => {
        
        render( <FirsApp title={title}  />)
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
        
    });
    
     test('debe de de mostrar el title en un h1', () => {
        
        
        render( <FirsApp title={title}  />)
        expect(screen.getByRole('heading',{level:1}).innerHTML ).toContain(title)


        
    });


     test('debe de de mostrar el subtitle enviado por prps', () => {
        
        
         render(
              <FirsApp title={title}
                 subtitle={subtitle} />
         )
         expect(screen.getAllByText(subtitle).length).toBe(2);



         

        
    });
});
