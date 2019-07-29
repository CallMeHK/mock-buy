import { h, FunctionComponent } from "preact";
import { IField } from "../../context/store";
import { css, cx } from "emotion";

export interface IAccountDetailInputProps {
  label: string;
  field: IField;
  onInputFunc: Function;
  onBlurFunc: Function;
}

const accountDetailsInputCss = css`
  width: calc(50% - 15px);
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin: 15px 0px 0px;
  label {
    color: rgb(204, 204, 204);
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    padding-bottom: 8px;
  }
`;
const inputCss = css`
  color: rgb(239, 239, 239);
  font-weight: 500;
  max-width: 100%;
  height: 40px;
  display: block;
  width: 100%;
  -webkit-appearance: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 10px;
  border-radius: 3px;
  background: rgb(54, 54, 54);
`;

const AccountDetailsInput: FunctionComponent<
  IAccountDetailInputProps
> = props => (
  <div className={accountDetailsInputCss}>
    <label>{props.label}</label>
    <input
      className={inputCss}
      value={props.field.value}
      onBlur={() => props.onBlurFunc()}
      onInput={(e: any) => props.onInputFunc(e)}
    />
    {props.field.valid === false && (
      <span style={{ color: "red" }}>Field is required</span>
    )}
  </div>
);

export default AccountDetailsInput;
