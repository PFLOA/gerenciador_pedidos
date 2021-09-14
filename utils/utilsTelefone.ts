export const validateTelefoneRegex = (value: string): boolean => {
  const reg = new RegExp(/\d{2}\d{4,5}\d{4}/g);
  const result = reg.test(value.replace(/\s/g, ''));

  return result;
};
export const maskTelefone = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
};
