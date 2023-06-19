import { render, screen } from "@testing-library/react"
import SearchForm from "./SearchForm"

describe('Search Form',()=>{
    test('Render Filter Element',()=>{
        render(<SearchForm/>)
        const typeElement = screen.getByRole('textbox')
        expect(typeElement).toBeInTheDocument();
        
        const statusElement = screen.getByRole('combobox',{name:'status'});
        expect(statusElement).toBeInTheDocument()

        const filterButtonElement = screen.getByRole('generic',{name: 'filter'});
        expect(filterButtonElement).toBeInTheDocument()
    })
})