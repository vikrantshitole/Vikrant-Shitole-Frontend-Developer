import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/redux";


const customRender = component => render(
    <Provider store={store()}>
        {component}
    </Provider>
)
export * from '@testing-library/react'
export {customRender as render};