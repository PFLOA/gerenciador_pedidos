import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import styles from './style.module.scss';

const InputLogin = () => {
	return (
		<>
			<input
				id="user"
				placeholder="Usuário"
				className={styles.input}
				type="text"
				name="username"
			/>
			<input
				id="pw"
				placeholder="Senha"
				className={styles.input}
				type="password"
				name="senha"
			/>
		</>
	);
};

export default InputLogin;
