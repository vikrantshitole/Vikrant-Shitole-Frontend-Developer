import { render, screen } from "@testing-library/react"
import Badge from "./badge"
const mission = {
    name:'Space X'
}
describe('Badge',()=>{
    test('Render Badge',()=>{
        render(<Badge mission={mission} />);
        const badgeElement = screen.getByText(mission.name);
        expect(badgeElement).toBeInTheDocument()
    })
})