export const REGEX = {
  USER: {
    NAME: /^(?! )[a-zA-ZÀ-ÿñÑ]+(?: [a-zA-ZÀ-ÿñÑ]+){0,3}$/,
    PASS: {
      min: /^.{8,}$/,
      upper: /^(?=.*[A-Z])/,
      lower: /^(?=.*[a-z])/,
      number: /^(?=.*\d)/,
      spaces: /^\S*$/,
      special: /^(?=.*[^a-zA-Z0-9\s])/,
    },
    MAIL: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
  },
};

export const MESSAGES = {
  PASS: {
    min: 'La contraseña debe tener mínimo 8 caracteres',
    upper: 'Debe contener al menos una letra mayúscula',
    lower: 'Debe contener al menos una letra minúscula',
    number: 'Debe contener al menos un número',
    spaces: 'No debe tener espacios',
    special: 'Debe contener al menos un carácter especial',
  },
  MAIL: 'Correo invalido',
  NAME: 'Nombre invalido',
};
