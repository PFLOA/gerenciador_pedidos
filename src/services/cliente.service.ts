import api from './api'
import EndPoints from './endpoints/endpoints';
import { BuscarClientesFiltroRequest } from './models/cliente.model'

export const buscarClientesPorFiltro = async (filter: BuscarClientesFiltroRequest) => {
    let response = api.get(`${EndPoints.GetClientes}`, { params: filter });
    return response;
}