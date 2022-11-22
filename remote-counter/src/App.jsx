import { render } from "solid-js/web";

import Counter from "./components/Counter";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote-counter</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <br />
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
