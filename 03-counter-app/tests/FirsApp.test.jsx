import { render } from "@testing-library/react";
import { FirsApp } from "../src/FirsApp";

describe('Pruebas en <FirstApp />', () => {
   // test('debe de hacer match con el snapshot', () => {
        
      //  const title = 'Hola spy mundo';
        //const subtitle = 'katty';

       // const {container} = render( <FirsApp title={title} subtitle={subtitle} />)
        
       // expect(container).toMatchSnapshot();
        
   // });
     test('debe de de mostrar el title en un h1', () => {
        
        const title = 'Hola spy mundo';
        const {container , getByText, getByTestId} = render( <FirsApp title={title}  />)
         expect(getByText(title)).toBeTruthy();
         


         //const h1 = container.querySelector('h1');
         //expect(h1.innerHTML).toContain(title)
         expect(getByTestId('test-title').innerHTML).toContain(title);



        
    });


     test('debe de de mostrar el subtitle enviado por prps', () => {
        
         const title = 'Hola spy mundo';
         const subtitle = 'spy subtitle';
         const { getAllByText } = render(
             <FirsApp title={title}
             subtitle={subtitle} />)
         expect(getAllByText(subtitle).length).toBe(2);



         

        
    });
});
