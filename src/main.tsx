declare global {
  interface Window {
    __FRIDAY_POETRY__: any;
  }
}


import { Component, h } from "preact";
import { Provider } from "preact-redux";
import { Router } from "preact-router";
import { NavBar } from "./components";
import { About, Home, Settings } from "./routes";
import { createStore } from "./store/store";


const store = createStore();

export default class App extends Component<any, any> {
  constructor() {
    super();
    this.state = { currentUrl: null };
  }

  public render(props: any, state: any) {
    return (
      <Provider store={store}>
        <div class="container" >
          <NavBar path={state.currentUrl} />
          <Router onChange={this.handleRoute.bind(this)}>
            <Home path="/" />
            <Home path="/poem/:poemId" />
            <Settings path="/settings" />
            <About path="/about" />
          </Router>
        </div>
      </Provider>
    );
  }

  private handleRoute({ currentUrl }: any) {
    this.setState({ currentUrl });
  }
}
