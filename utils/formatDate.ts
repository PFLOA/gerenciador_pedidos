/* eslint-disable no-shadow */

const formatDate = ({
  value,
  locale = 'pt-BR',
  time = false,
}: {
  value: Date;
  locale?: string;
  time?: boolean;
}): string => {
  let formatDate: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  };

  if (time) formatDate = { ...formatDate, hour: '2-digit', minute: '2-digit' };

  return Intl.DateTimeFormat(locale, formatDate).format(value);
};

export const formatDatePedido = (value: Date): string => new Date(value).toLocaleDateString();

export default formatDate;
