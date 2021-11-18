import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';

import InputLogin from '../../components/Form/InputLogin';

import Loader from '../../components/Loader';

import { realizarLogin } from '../../service/login.service';
import { handleEventChange } from '../../utils/handleChanges';

import styles from './style.module.scss';

const LoginWindow = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [login, setLogin] = useState({
		userName: '',
		senha: '',
	});

	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleEventChange(e, login);
	};
	const handleSubmit = useCallback(
		async (e: any) => {
			setIsLoading(true);
			e.preventDefault();
			try {
				const result = await realizarLogin(login.userName, login.senha);
				router.push('/dashboard');
			} catch (error: any) {
				if (error.response) {
					if (error.response.status === 404) {
						if(error.response.data.messages){
							setErrorMessage(error.response.data.messages[0]);
						}else{
							setErrorMessage('Error interno do servidor ! Tente novamente.');
						}
					}
				}
				else
				{
					setErrorMessage('Error interno do servidor ! Tente novamente.');
				}
				setIsLoading(false);
			}
		},
		[login.senha, login.userName, router]
	);

	return (
		<div className={styles.login}>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				<InputLogin handleChange={handleChange} />
				<div className="d-flex flex-column justify-content-center align-items-center">
					{!isLoading ? (
						<button className={styles.btn_login} onSubmit={handleSubmit}>
							Login
						</button>
					) : (
						<Loader />
					)}
					{errorMessage && <div className={styles.errors}>{errorMessage}</div>}
				</div>
			</Form>
		</div>
	);
};

export default LoginWindow;
