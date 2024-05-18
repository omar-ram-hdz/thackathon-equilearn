export const REGEX = {
  USER: {
    NAME: /^(?! )[a-zA-ZÀ-ÿñÑ]+(?: [a-zA-ZÀ-ÿñÑ]+){0,3}$/,
    PASS: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9\s])\S{8,}$/,
  },
};

/* 
  Solo letras
    [a-zA-ZÀ-ÿñÑ]+
  Máximo 4 palabras separadas por espacio
    ^(?:[a-zA-ZÀ-ÿñÑ]+(?: [a-zA-ZÀ-ÿñÑ]+){0,3})$
  No espacios ni al principio ni al final
    ^(?! )(.*?)(?<! )$
  
  
  password: {
    min: /^.{8,}$/,
    upper: /^(?=.*[A-Z])/,
    lower: /^(?=.*[a-z])/,
    number: /^(?=.*\d)/,
    spaces: /^\S*$/,
    special: /^(?=.*[^a-zA-Z0-9\s])/,
  },
*/
