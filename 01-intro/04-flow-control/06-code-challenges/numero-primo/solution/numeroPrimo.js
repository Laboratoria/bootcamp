const esPrimo = (n) => {

  if (n == 1) {
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};


module.exports = esPrimo;
