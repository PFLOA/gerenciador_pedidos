import api from './api';
import EndPoints from './endpoints/endpoints';

export const realizarLogin = async (usuario: string, pw: string) => {
    let response = api.post(`${EndPoints.Login}`, { userName: usuario, senha: pw });
    return response;
}