import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import styles from './style.module.scss';

const FormCadastroButton: React.FC = () => {
	//#region [ UseRouter ]

	const router = useRouter();

	//#endregion
	//#region [ Handles ]

	const handleClick = useCallback(() => {
		router.back();
	}, [router]);

	//#endregion

	return (
		<div className="d-flex align-items-center">
			<button type="button" className={styles.novo} onClick={handleClick}>
				<p>Voltar</p>
			</button>
			<button type="submit" className={styles.submit}>
				Salvar
			</button>
		</div>
	);
};

export default FormCadastroButton;
