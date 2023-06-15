export function validateEmail(email) {
    var regEx = /^\S+@\S+\.\S+$/;
    return regEx.test(String(email).toLowerCase())
}
