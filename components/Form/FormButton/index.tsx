import Link from 'next/link';

import styles from './style.module.scss';

interface FormButton {
	link?: string;
	handleClearFilter(): void;
}
const FormButton: React.FC<FormButton> = ({ link, handleClearFilter }) => {
	return (
		<div className="d-flex align-items-center">
			{link && (
				<Link href={link}>
					<a className={styles.novo}>
						<p>Novo</p>
					</a>
				</Link>
			)}
			<button type="button" onClick={handleClearFilter} className={styles.submit}>
				Limpar
			</button>
			<button type="submit" className={styles.submit}>
				Pesquisar
			</button>
		</div>
	);
};

export default FormButton;
