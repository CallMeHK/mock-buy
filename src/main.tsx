import { h, render } from "preact";

import App from "./App";
import { ProviderComponent } from "./context/configureContext";
require("preact/debug");

render(
  <ProviderComponent>
    <App name="World" />
  </ProviderComponent>,
  document.querySelector("#app")
);
