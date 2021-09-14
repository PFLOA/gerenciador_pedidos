import api from '../../api';
import { ToQueryParams } from '../../models/core/core.model';
import EndPoints from '../../endpoints/endpoints';

export const BuscarPorFiltro = async <TRequest, TResult>(
	endpoint: EndPoints,
	request: ToQueryParams<TRequest>
): Promise<TResult> => {
	try {
		const result = await api.get(`${endpoint}`, request);
		return Promise.resolve(result.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const BuscarPorGuid = async <TResult>(
	endpoint: EndPoints,
	guid: string
): Promise<TResult> => {
	try {
		const result = await api.get(`${endpoint}/${guid}`);
		return Promise.resolve(result.data.okResult);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const Criar = async <TBody, TResult>(
	endpoint: EndPoints,
	body: TBody
): Promise<TResult> => {
	try {
		const result = await api.post(`${endpoint}`, body);
		return Promise.resolve(result.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const Alterar = async <TBody, TResult>(
	endpoint: EndPoints,
	body: TBody
): Promise<TResult> => {
	try {
		const result = await api.put(`${endpoint}`, body);
		return Promise.resolve(result.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const Remover = async <TResult>(
	endpoint: EndPoints,
	guid: string
): Promise<TResult> => {
	try {
		const result = await api.delete(`${endpoint}/${guid}`);
		return Promise.resolve(result.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
