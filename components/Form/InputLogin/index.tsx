import { ChangeEvent } from 'react';

import styles from './style.module.scss';

interface InputLoginInterface {
	handleChange(e: ChangeEvent<HTMLInputElement>): void;
}
const InputLogin: React.FC<InputLoginInterface> = ({
	handleChange
}) => {
	return (
		<>
			<input
				id="user"
				placeholder="Usuário"
				className={styles.input}
				type="text"
				name="userName"
				onChange={handleChange}
			/>
			<input
				id="pw"
				placeholder="Senha"
				className={styles.input}
				type="password"
				name="senha"
				onChange={handleChange}
			/>
		</>
	);
};

export default InputLogin;
