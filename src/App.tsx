import { h, Component } from "preact";
import Header from "./components/common/Header";
import Breadcrumb from "./components/common/Breadcrumb";
// import TestChild from "./components/TestChild";

export interface HelloWorldProps {
  name: string;
}

class App extends Component<HelloWorldProps, any> {
  render(props) {
    return (
      <div>
        <Header />
        <Breadcrumb />
      </div>
    );
  }
}

export default App;
