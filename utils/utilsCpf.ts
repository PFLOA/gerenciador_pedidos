/* eslint-disable no-plusplus */
/* eslint-disable radix */

export const maskCpf = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const validateCPF = (CPF: string): boolean => {
  let Sum = 0;
  let Rest = 0;
  const strCPF = CPF.replaceAll('.', '').replace('-', '');

  if (
    strCPF === '00000000000' ||
    strCPF === '11111111111' ||
    strCPF === '22222222222' ||
    strCPF === '33333333333' ||
    strCPF === '44444444444' ||
    strCPF === '55555555555' ||
    strCPF === '66666666666' ||
    strCPF === '77777777777' ||
    strCPF === '88888888888' ||
    strCPF === '99999999999'
  )
    return false;

  for (let i = 1; i <= 9; i++)
    Sum += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Rest = (Sum * 10) % 11;

  if (Rest === 10 || Rest === 11) Rest = 0;
  if (Rest !== parseInt(strCPF.substring(9, 10))) return false;

  Sum = 0;

  for (let i = 1; i <= 10; i++)
    Sum += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Rest = (Sum * 10) % 11;

  if (Rest === 10 || Rest === 11) Rest = 0;
  if (Rest !== parseInt(strCPF.substring(10, 11))) return false;
  return true;
};
