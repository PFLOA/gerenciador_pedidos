
import { ReactNode } from 'react';
import styles from './style.module.scss';

interface CardProps {
	titulo: string;
	footer: ReactNode;
}

const Card: React.FC<CardProps> = ({ titulo, footer, children }) => {
	return (
		<div className="d-flex mb-4 me-5">
			<div className={styles.card_line}></div>
			<div className={styles.card}>
				<div className={styles.card_body}>
					<h1>{titulo}</h1>
					<div>{children}</div>
				</div>
				<div className={styles.card_footer}>
					<div>{footer}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
