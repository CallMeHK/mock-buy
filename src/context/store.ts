export interface IStore {
  accountDetails: IAccountDetails;
}

export interface IField {
  value: string,
  valid?: boolean
}

export interface IAccountDetails {
  firstName: IField;
  lastName: IField;
  email: IField;
  confirmEmail: IField;
  country: IField;
  companyName: IField;
  allValid: boolean
}

let store: IStore = {
  accountDetails: {
    firstName: {value:""},
    lastName: {value:""},
    email: {value:""},
    confirmEmail: {value:""},
    country: {value:""},
    companyName: {value:""},
    allValid: false
  }
};

export default store;
