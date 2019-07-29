import { IAccountDetails, IStore } from "./store";

const setAccountDetails = (dispatch: any, state: IStore) => (
  details: Partial<IAccountDetails>
) => {
  const keys = Object.keys(details);
  keys.forEach(key => {
    if (details[key].valid !== undefined) {
      details[key].value === ""
        ? (details[key].valid = false)
        : (details[key].valid = true);
    }
  });

  dispatch({
    type: "set-account-details",
    payload: details
  });
};

const validateAccountDetails = (dispatch: any, state: IStore) => (
  field: string
) => {
  const details = { [field]: state.accountDetails[field] };
  details[field].value === ""
    ? (details[field].valid = false)
    : (details[field].valid = true);
  dispatch({
    type: "set-account-details",
    payload: details
  });
};

export { setAccountDetails, validateAccountDetails };
