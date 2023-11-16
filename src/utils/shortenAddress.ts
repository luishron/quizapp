export const shortenAddress = (address, startLength = 2, endLength = 4) => {
  if (!address) return '';
  return `${address.substring(0, startLength + 2)}...${address.substring(
    address.length - endLength
  )}`;
};
