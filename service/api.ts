import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_ENV_VARIABLE,
});

console.log(process.env.NEXT_PUBLIC_ENV_VARIABLE);

api.interceptors.request.use(async (config) => {
	const token = getToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default api;
