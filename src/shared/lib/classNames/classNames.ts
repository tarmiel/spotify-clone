type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];
type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;

function toVal(mix: ClassValue): string {
  let k,
    y,
    str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix?.[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

export function cn(...inputs: ClassValue[]): string {
  let str = '';

  inputs.forEach((cls) => {
    const x = toVal(cls);
    if (x) {
      str && (str += ' ');
      str += x;
    }
  });

  return str;
}
