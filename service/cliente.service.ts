import api from './api';
import EndPoints from './endpoints/endpoints';
import {
	AlterarClienteRequest,
	BuscarClientesFiltroRequest,
	BuscarClientesFiltroResponse,
	ClienteModel,
	CriarClienteRequest,
} from './models/cliente/cliente.model';
import { ToQueryParams } from './models/core/core.model';

export const buscarClientesPorFiltro = async (
	filter: ToQueryParams<BuscarClientesFiltroRequest>
): Promise<BuscarClientesFiltroResponse> => {
	try {
		const result = await api.get(`${EndPoints.Cliente}`, filter);
		return Promise.resolve(result.data);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const buscarClientesPorGuid = async (
	guid: string
): Promise<ClienteModel> => {
	try {
		const result = await api.get(`${EndPoints.GetClientePorGuid}/${guid}`);
		return Promise.resolve(result.data.cliente);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const criarCliente = async (
	request: CriarClienteRequest
): Promise<ClienteModel> => {
	try {
		const result = await api.post(`${EndPoints.Cliente}`, request);
		return Promise.resolve(result.data.cliente);
	} catch (error) {
		return Promise.reject(error);
	}
};
export const alterarCliente = async (
	request: AlterarClienteRequest
): Promise<ClienteModel> => {
	try {
		const result = await api.put(`${EndPoints.Cliente}`, request);
		return Promise.resolve(result.data.cliente);
	} catch (error) {
		return Promise.reject(error);
	}
};
