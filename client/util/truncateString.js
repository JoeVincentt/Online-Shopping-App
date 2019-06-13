export const truncateString = (name, amountOfSymbols) => {
  let newTruncatedString = name.substring(0, amountOfSymbols);
  if (newTruncatedString.length > 0) {
    newTruncatedString = newTruncatedString + "...";
  }

  return newTruncatedString;
};
