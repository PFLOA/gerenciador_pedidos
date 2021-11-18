import { RefObject } from 'react';
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

export const formSetValue = (formRef: RefObject<HTMLFormElement>, objeto: any) => {
	const obj: { [key: string]: any } = objeto;
	
	var elements = formRef.current?.elements;

	for (var prop in obj) {
		if (elements != null) {
			const element = elements.namedItem(prop) as Element;

			if (element?.nodeName == 'TEXTAREA') {
				element.innerHTML = obj[prop];
			} else {
				element?.setAttribute('value', obj[prop]);
			}
		}
	}
};
