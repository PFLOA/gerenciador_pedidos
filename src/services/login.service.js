import api from './api'
import EndPoints from './endpoints/endpoints';

export const realizarLogin = async (usuario, pw) => {
    let response = api.post(`${EndPoints.Login}`, {userName: usuario, senha: pw})
    return response;
}