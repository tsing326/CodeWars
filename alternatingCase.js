//each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
