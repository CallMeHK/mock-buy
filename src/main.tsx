import { h, render } from "preact";

import App from "./App";
import {ProviderComponent} from "./context/configureContext";


render(
  <ProviderComponent>
    <App name="World" />
  </ProviderComponent>,
  document.querySelector("#app")
);
