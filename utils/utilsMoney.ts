export const removerMaskMoney = (value: number): number => {
	return parseFloat(value.toString().replace('R$', '').replaceAll('.', '').replace(',', '.'));
};
export const formatMoney = (money: number): string => {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(money);
};
export const maskMoney = (value: string): string => {
	value = value.replace(/\D/g, '');

	const options = { minimumFractionDigits: 2 };
	const result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100);

	return `R$ ${result}`;
};
