const stringify = (params) => {
  let queryString = '';

  for (let param of params) {
    queryString += queryString.length === 0 ? '?' : '&';
    queryString += `${param.key}=${param.value}`;
  }

  return queryString;
};

export { stringify };
