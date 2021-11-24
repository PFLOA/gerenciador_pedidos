
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react-transition-group/node_modules/@types/react';
import styles from './style.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	titulo: string;
	footer: ReactNode;
}

const Card: React.FC<CardProps> = ({ titulo, footer, children, ...rest }) => {
	return (
		<div className="d-flex mb-4 me-5" {...rest} >
			<div className={styles.card_line}></div>
			<div className={styles.card}>
				<div className={styles.card_body}>
					<h1>{titulo}</h1>
					{children}
				</div>
				<div className={styles.card_footer}>
					{footer}
				</div>
			</div>
		</div>
	);
};

export default Card;
