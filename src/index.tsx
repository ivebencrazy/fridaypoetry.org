import { h, render } from "preact";

declare var module: any;
declare var require: any;
declare global {
    interface Window {
        __FRIDAY_POETRY__: any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

render(<h1>HELLO!!!</h1>, document.body);
