const {
  RutLengthException,
} = require('./exceptions');

const validadorRut = (rut) => {
  let sum = 0;
  let mul = 2;
  let index = 0;
  const value = String(rut).replace('.', '').replace('-', '');
  const body = value.slice(0, -1);
  let dv = value.slice(-1).toUpperCase();
  const format = `${body}-${dv}`;
  try {
    if (body.length <= 6) {
      throw new RutLengthException('Largo de RUT no válido');
    }
    value.forEach((num) => {
      index = mul * parseInt(num, 10);
      sum += index;
      if (mul < 7) {
        mul += 1;
      } else {
        mul = 2;
      }
    });
    const dvCalc = 11 - (sum % 11);

    dv = (dv === 'K') ? 10 : dv;
    dv = (dv === 0) ? 11 : dv;

    if (dv !== dvCalc) {
      throw new RutLengthException('Digito verificador incorrecto');
    }
    return format;
  } catch (e) {
    console.error(e);
  }
  return false;
};

module.exports = validadorRut;
