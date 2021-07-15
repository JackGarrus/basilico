module.exports = {
  getFormattedText: (string) => {
    let unCamelCased = string.replace(/([A-Z])/g, " $1");
    let justAlphabeticString = unCamelCased.replace(/[^a-z]/gi, ' ')
    let formattedTitle = justAlphabeticString.charAt(0).toUpperCase() + justAlphabeticString.slice(1);
    return formattedTitle
  }
}
