import { h, Component } from "preact";
import { css, cx } from "emotion";

import Header from "./components/common/Header";
import Breadcrumb from "./components/common/Breadcrumb";
import AccountDetails from "./components/account-details/AccountDetails";
import OrderSummary from "./components/order-summary/OrderSummary";

export interface HelloWorldProps {
  name: string;
}

const formCss = css`
  max-width: 1100px;
  width: 100%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px auto;
  padding: 0px 10px;
  main {
    display: flex;
    width: calc(60% - 10px);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  aside {
    display: flex;
    width: calc(40% - 10px);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
`;

class App extends Component<HelloWorldProps, any> {
  render(props) {
    return (
      <div>
        <Header />
        <Breadcrumb />
        <div className={formCss}>
          <main>
            <AccountDetails />
          </main>
          <aside>
            <OrderSummary/>
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
