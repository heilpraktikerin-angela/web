// Note: This file can only be accessed on the server! (Due 'process')
// -> Dynamic import required (e.g. in loader function)
export const contactConfig = {
  phoneNumber: process.env.CONTACT_PHONE_NUMBER ?? 'unknown',
  firstName: process.env.CONTACT_FIRST_NAME ?? 'unknown',
  lastName: process.env.CONTACT_LAST_NAME ?? 'unknown',
  address: {
    street: process.env.CONTACT_ADDRESS_STREET ?? 'unknown',
    streetNumber: process.env.CONTACT_ADDRESS_STREET_NUMBER ?? 'unknown',
    postCode: process.env.CONTACT_ADDRESS_POST_CODE ?? 'unknown',
    city: process.env.CONTACT_ADDRESS_CITY ?? 'unknown',
  },
  surrounding: process.env.CONTACT_SURROUNDING ?? 'unknown',
  email: process.env.CONTACT_EMAIL ?? 'unknown',
  homepage: process.env.CONTACT_HOMEPAGE ?? 'unknown',
};
