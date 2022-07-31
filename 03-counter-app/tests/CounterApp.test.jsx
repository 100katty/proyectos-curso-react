import { CounterApp } from "../src/CounterApp";
import { render , screen ,fireEvent} from "@testing-library/react";

describe('Pruebas en <CountainerApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        
       const value= 20
       
       const {container} = render( <CounterApp value={value} />)
        
       expect(container).toMatchSnapshot();
        
    });
     test('debe de hacer de mostrar el valor del value', () => {
        
       const value= 100
       render( <CounterApp value={value} />)
       expect( screen.getByText(100)).toBeTruthy();
       
        
   });
    
    test('debe de incremnetar con el button +1', () => {

       const value= 10
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
        
     
       
        
    });
     test('debe de decremnetar con el button -1', () => {

       const value= 10
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
        
     
       
        
   });
    
    test('debe de funcionar con el button reset', () => {

       const value= 10
        render(<CounterApp value={100} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
       // expect(screen.getByText(100)).toBeTruthy();
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(100)).toBeTruthy();
        
   });
    


  
});
