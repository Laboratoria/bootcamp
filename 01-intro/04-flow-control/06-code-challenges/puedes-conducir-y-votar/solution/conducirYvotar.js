const comprobar = (edad) => {

  if (edad >= 16 && edad >= 18) {
    return true;
  }

  return false;
}

module.exports = comprobar;
