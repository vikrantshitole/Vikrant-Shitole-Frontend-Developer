import { render, screen } from "@testing-library/react"
import Dashboard from "./Dashboard"

describe('DashBoard',()=>{
    test('DashBoard Element render',()=>{
        render(<Dashboard/>)
        const carouselIndicatorsElement = screen.getByRole('list', {  name: /carousel\-indicators/i})
        expect(carouselIndicatorsElement).toBeInTheDocument();

        const carouselIndicatorElement = screen.getAllByRole('listitem',{name: /carousel\-indicator/i})
        expect(carouselIndicatorElement).toHaveLength(3)

        const carouselItemElements = screen.getAllByRole('img')
        expect(carouselItemElements).toHaveLength(3)

        const prevButtonElement = screen.getByRole('button',{name: /prev/i})
        expect(prevButtonElement).toBeInTheDocument()

        const nextButtonElement = screen.getByRole('button',{name: /next/i})
        expect(nextButtonElement).toBeInTheDocument()
    })
})