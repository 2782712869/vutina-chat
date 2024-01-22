export function authTelephone(value: string) {
  return /^1\d{10}$/.test(value);
}

export function authPassword(value: string) {
  const hasLetters = /[a-zA-Z]/.test(value);
  const hasNumbers = /\d/.test(value);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const isValid =
    value.length >= 8 && hasLetters && hasNumbers && hasSpecialChars;
  return isValid;
}
