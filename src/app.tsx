import { h, Component } from "preact";
import TestChild from "./components/TestChild";

export interface HelloWorldProps {
  name: string;
}

class App extends Component<HelloWorldProps, any> {
  render(props) {
    return (
      <div>
        <p>Hello {props.name}!!!!</p>
        <TestChild/>
      </div>
    );
  }
}

export default App;
