import { h, FunctionComponent } from "preact";
import { css, cx } from "emotion";

const headCss = css`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
`;

const imgCss = css`
  margin-left: 20px;
  display: block;
  vertical-align: middle;
  max-width: 164px;
  height: auto;
`;

const Header: FunctionComponent = () => (
  <header className={headCss}>
    <img
      className={imgCss}
      src="https://www.pluralsight.com/buy/static/assets/ps_logo.png"
      alt="Pluralsight logo"
    />
  </header>
);

export default Header;
