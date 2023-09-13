export const isValidEmail = (email) => {
    const regex = new RegExp(process.env.REACT_APP_EMAIL_REGEX);
    return regex.test(email);
};

export const isValidPhoneNumber = (phoneNumber) => {
    const regex = new RegExp(process.env.REACT_APP_PHONE_NUMBER);
    return regex.test(phoneNumber);
};

export const isValidFullName = (fullName) => {
    const regex = new RegExp(process.env.REACT_APP_FULLNAME_REGEX);
    return regex.test(fullName);
};

export const isValidPassword = (password, minLength) => {
    return password.length >= minLength;
};
