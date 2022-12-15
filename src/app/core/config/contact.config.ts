// Note: This file can only be accessed on the server! (Due 'process')
// -> Dynamic import required (e.g. in loader function)
export const contactConfig: TContactConfig = {
  phoneNumber: process.env.CONTACT_PHONE_NUMBER ?? 'unknown',
  firstName: process.env.CONTACT_FIRST_NAME ?? 'unknown',
  lastName: process.env.CONTACT_LAST_NAME ?? 'unknown',
  twitterHandle: 'unknown',
  address: {
    street: process.env.CONTACT_ADDRESS_STREET ?? 'unknown',
    streetNumber: process.env.CONTACT_ADDRESS_STREET_NUMBER ?? 'unknown',
    postCode: process.env.CONTACT_ADDRESS_POST_CODE ?? 'unknown',
    city: process.env.CONTACT_ADDRESS_CITY ?? 'unknown',
  },
  surrounding: process.env.CONTACT_SURROUNDING ?? 'unknown',
  email: process.env.CONTACT_EMAIL ?? 'unknown',
  homepage: process.env.CONTACT_HOMEPAGE ?? 'unknown',
  calcom: {
    initialInterviewUrl: process.env.CAL_COM_INITIAL_INTERVIEW_URL ?? 'unknown',
  },
  googleMaps:
    'https://www.google.com/maps/place/Heilpraktikerin+Angela+Kohrs/@50.0561541,10.1838649,8z/data=!4m12!1m6!3m5!1s0x41c172812df2042f:0x5a3cb33db4b84b9d!2sHeilpraktikerin+Angela+Kohrs!8m2!3d50.0615523!4d11.3048688!3m4!1s0x41c172812df2042f:0x5a3cb33db4b84b9d!8m2!3d50.0615523!4d11.3048688',
};

export type TContactConfig = {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  twitterHandle: string;
  address: {
    street: string;
    streetNumber: string;
    postCode: string;
    city: string;
  };
  surrounding: string;
  email: string;
  homepage: string;
  calcom: {
    initialInterviewUrl: string;
  };
  googleMaps: string;
};
