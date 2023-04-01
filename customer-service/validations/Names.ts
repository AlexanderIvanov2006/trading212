const GivennamesRegexSimple= new RegExp (`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`)

 export function isValidishNames(value: string ): boolean {
    return GivennamesRegexSimple.test(value)
 }