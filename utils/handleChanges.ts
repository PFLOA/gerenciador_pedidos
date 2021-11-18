import { PropriedadesFormularios } from './propriedadesFormulario';
import { maskCpf } from './utilsCpf';
import { maskMoney } from './utilsMoney';
import { maskTelefone } from './utilsTelefone';

let timeout = {} as NodeJS.Timeout;

export function handleEventChange<T>(e: any, state: T): any {
	handleMask(e);
	const obj: { [key: string]: any } = state;

	const name = e.target.name;
	var value = e.target.value.trim();

	if (value === '') value = undefined;
	if (name === e.target.name) obj[name] = value;

	return { name, value };
}

export const decomporEventInput = (e: any) => {
	const name = e.target.name;
	const value = e.target.value.trim();

	return { name, value };
};

export const handleMask = (e: any): void => {
	const { name, value } = decomporEventInput(e);

	switch (name) {
		case PropriedadesFormularios.Telefone:
			e.target.value = maskTelefone(value);
			break;
		case PropriedadesFormularios.Cpf:
			e.target.value = maskCpf(value);
			break;
		case PropriedadesFormularios.Money:
			e.target.value = maskMoney(value);
			break;
		default:
			break;
	}
};

export const debounce = (fn: () => void, time = 500): void => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		fn();
	}, time);
};
