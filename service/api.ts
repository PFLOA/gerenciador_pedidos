import axios from 'axios';
import { getToken, isAuthenticated } from './auth';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_ENV_VARIABLE,
});

api.interceptors.request.use(async (config) => {
	if (isAuthenticated()) {
		config.headers.Authorization = `Bearer ${getToken()}`;
	}

	return config;
});

api.interceptors.response.use(
	async (status) => {
		console.log(status);
		
		return Promise.resolve(status);
	},
	async (error: any) => {
		const response = error.response;
		if(response.status == 401) window.location.href = '/gerenciador';

		return Promise.reject(error);
	}
);

export default api;
