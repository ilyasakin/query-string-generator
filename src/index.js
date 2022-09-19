const stringify = (query) => {
  let queryString = '';

  for (let param of query) {
    queryString += query.length === 0 ? '?' : '&';
    queryString += `${param.key}=${param.value}`;
  }

  return queryString;
};

export { stringify };
