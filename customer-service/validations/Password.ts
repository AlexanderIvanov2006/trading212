const PasswordRegexSimple= new RegExp(`^[a-zA-Z]+([0-9]*[a-zA-Z]*)*((([0-9]+?[a-zA-Z]*)+[^0-9a-zA-Z]+)|([^0-9a-zA-Z]+(([a-zA-Z]*[0-9]+?[a-zA-Z]*)+?)))+?([^0-9a-zA-Z]*[0-9]*[a-zA-Z]*)+$`)
export function isValidishPassword(value: string): boolean {
 return PasswordRegexSimple.test(value)
}