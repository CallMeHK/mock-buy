import { h, FunctionComponent } from "preact";
import { css, cx } from "emotion";

const accountDetailsSubmitCss = css`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
`;

const AccountDetailsSubmit: FunctionComponent = () => (
  <div className={accountDetailsSubmitCss}>
    AccountDetailsSubmit
  </div>
);

export default AccountDetailsSubmit;
