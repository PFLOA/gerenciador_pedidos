import Link from 'next/link';
import { useCallback } from 'react';
import { Form } from 'react-bootstrap';

import Input from '../../components/Form/InputLogin';
import styles from './style.module.scss';

const LoginWindow = () => {
	const handleSubmit = useCallback(() => {}, []);
	return (
		<div className={styles.login}>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				<Input />
			</Form>
			<Link href="/dashboard">
				<a className={styles.btn_login}>Logar</a>
			</Link>
		</div>
	);
};

export default LoginWindow;
