import { h, FunctionComponent } from "preact";
import { useContext, useCallback } from "preact/hooks";
import { css, cx } from "emotion";

import AccountDetailsInput from "./AccountDetailsInput";
import Context from "../../context/configureContext";
import { setAccountDetails, validateAccountDetails } from "../../context/actions";

const accountDetailsFormCss = css`
  width: 100%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 0px 30px;
  border-bottom: 1px solid rgb(54, 54, 54);
`;

const AccountDetailsForm: FunctionComponent = () => {
  const { state, dispatch } = useContext(Context);
  const {
    firstName,
    lastName,
    email,
    confirmEmail,
    country,
    companyName
  } = state.accountDetails;
  const onInputFunc = useCallback(setAccountDetails(dispatch, state), [
    dispatch,
    state
  ]);
  const onBlurFunc = useCallback(validateAccountDetails(dispatch, state), [
    dispatch,
    state
  ]);
  console.log(state.accountDetails);
  return (
    <div className={accountDetailsFormCss}>
      <AccountDetailsInput
        label="First Name"
        field={firstName}
        onBlurFunc={() => onBlurFunc("firstName")}
        onInputFunc={(e: any) =>
          onInputFunc({ firstName: { value: e.target.value } })
        }
      />
      <AccountDetailsInput
        label="Last Name"
        field={lastName}
        onBlurFunc={() => onBlurFunc("lastName")}
        onInputFunc={(e: any) =>
          onInputFunc({ lastName: { value: e.target.value } })
        }
      />
      <AccountDetailsInput
        label="Email"
        field={email}
        onBlurFunc={() => onBlurFunc("email")}
        onInputFunc={(e: any) =>
          onInputFunc({ email: { value: e.target.value } })
        }
      />
      <AccountDetailsInput
        label="Confirm Email"
        field={confirmEmail}
        onBlurFunc={() => onBlurFunc("confirmEmail")}
        onInputFunc={(e: any) =>
          onInputFunc({ confirmEmail: { value: e.target.value } })
        }
      />
      <AccountDetailsInput
        label="Country"
        field={country}
        onBlurFunc={() => onBlurFunc("country")}
        onInputFunc={(e: any) =>
          onInputFunc({ country: { value: e.target.value } })
        }
      />
      <AccountDetailsInput
        label="Company Name (Optional)"
        field={companyName}
        onBlurFunc={() => onBlurFunc("companyName")}
        onInputFunc={(e: any) =>
          onInputFunc({ companyName: { value: e.target.value } })
        }
      />
    </div>
  );
};

export default AccountDetailsForm;
