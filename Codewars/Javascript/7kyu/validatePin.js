function validatePIN (pin) {
    return /^(?:\d{4}$|\d{6}$)/.test(pin)
}
console.log(validatePIN("4563"))
console.log(validatePIN("456."))
console.log(validatePIN("5738394"))