import { render, screen } from "@testing-library/react"
import spacex from "../../../assets/SPACEX.jpg";
import CarouselItem from "./CarouselItem"
const item = {
    id: 1,
    img: spacex
}
const activeslide = 1
describe('Carousel Item',()=>{
    test('Render Carousel Item',()=>{
        render(<CarouselItem item={item} activeslide={activeslide} />)

        const carouselItemElement = screen.getByRole('img');
        expect(carouselItemElement).toBeInTheDocument()
    })
})