import { render, screen } from "../../test-utils"
import Header from "./Header"
import user from '@testing-library/user-event'
describe('Header',()=>{
    test('Header Render',()=>{
        render(<Header/>)
        // screen.debug()
        const spaceSpanElement = screen.getByText(/Space x/i)
        expect(spaceSpanElement).toBeInTheDocument();
        const checkboxElement = screen.getByRole('switch')
        expect(checkboxElement).toBeInTheDocument();
        const labelElement = screen.getByRole('label')
        expect(labelElement).toBeInTheDocument();
        
    })
    
    test('Header content checking',()=>{
        render(<Header/>)
        // screen.debug()
        const checkboxElement = screen.getByRole('switch')
        expect(checkboxElement).toBeInTheDocument();

        const labelElement = screen.getByRole('label')
        expect(labelElement).toHaveTextContent('Capsulse');
        
    })
    
    test('Header checkbox click content checks',async()=>{
        render(<Header/>)
        // screen.debug()
        user.setup()
        const checkboxElement = screen.getByRole('switch')
        expect(checkboxElement).toBeInTheDocument();

        const labelElement = screen.getByRole('label')
        expect(labelElement).toHaveTextContent('Capsulse');

        await user.click(checkboxElement);
        expect(checkboxElement).toBeChecked()
        expect(labelElement).toHaveTextContent('Rocket')
        
    })
})