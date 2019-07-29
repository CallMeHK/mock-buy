import { h, FunctionComponent } from "preact";
import { css, cx } from "emotion";

const orderSummaryCss = css`
position: relative;
box-shadow: none;
padding: 10px 20px 20px;
background: rgb(34, 34, 34);
z-index: 10;
    bottom: 0px;
    right: 0px;
    width: 100%;
    border-radius: 3px;
`;

const Header: FunctionComponent = () => (
  <section className={orderSummaryCss}>
    <div>
        <h3>Order Summary</h3>
    </div>
  </section>
);

export default Header;
