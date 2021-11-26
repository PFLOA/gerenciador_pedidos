import axios from 'axios';
import { getToken, isAuthenticated } from './auth';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_ENV_VARIABLE,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Method': 'GET, POST, PUT, DELETE, OPTIONS',
	},
});

export const apiLogin = axios.create({
	baseURL: process.env.NEXT_PUBLIC_ENV_VARIABLE,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Method': 'GET, POST, PUT, DELETE, OPTIONS',
	},
});

api.interceptors.request.use(async (config) => {
	if (isAuthenticated()) {
		config.headers.Authorization = `Bearer ${getToken()}`;
	} else {
		window.location.href = '/gerenciador';
	}

	return config;
});

api.interceptors.response.use(
	async (status) => {
		return Promise.resolve(status);
	},
	async (error: any) => {
		const response = error.response;
		if (response.status == 401) window.location.href = '/gerenciador';

		return Promise.reject(error);
	}
);

export default api;
