import { capitalize } from './capitalize';

export const objectToSearchParams = (obj: Object): URLSearchParams => {
  const params = new URLSearchParams();

  Object.entries(obj).map(([key, value]) => {
    if (Array.isArray(value)) {
      value.map((item) => params.append(capitalize(key), item));
    } else if (value) {
      params.append(capitalize(key), value);
    }
  });

  return params;
};
