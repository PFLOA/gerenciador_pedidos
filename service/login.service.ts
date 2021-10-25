import api from './api';
import { login } from './auth';
import EndPoints from './endpoints/endpoints';

export const realizarLogin = async (usuario: string, pw: string) => {
	try {
		const response = await api.post(`${EndPoints.Login}`, { userName: usuario, senha: pw });
		
		login(response.data.data.token);

		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
