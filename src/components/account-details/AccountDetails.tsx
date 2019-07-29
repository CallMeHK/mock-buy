import { h, FunctionComponent } from "preact";
import { css, cx } from "emotion";

import AccountDetailsForm from "./AccountDetailsForm";
import AccountDetailsSubmit from "./AccountDetailsSubmit";

const bodyCss = css`
  margin-bottom: 20px;
  display: block;
  padding: 20px 20px 30px;
  border-radius: 3px;
  background: rgb(34, 34, 34);
`;

const accountDetailsHeaderCss = css`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    font-size: 11px;
    padding-top: 3px;
    font-weight: 300;
    width: auto;
    margin-left: 15px;
  }
`;

const AccountDetails: FunctionComponent = () => (
  <div className={bodyCss}>
    <div className={accountDetailsHeaderCss}>
      <h2>1 - Account Details</h2>
      <div>Already have an account? Sign in</div>
    </div>
    <div>
      <AccountDetailsForm />
      <AccountDetailsSubmit />
    </div>
  </div>
);

export default AccountDetails;
