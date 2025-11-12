export const getKeyByValue = (obj: any, value: any) =>
  Object.keys(obj).find((key) => obj[key] === value);