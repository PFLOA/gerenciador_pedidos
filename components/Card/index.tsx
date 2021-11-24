import styles from './style.module.scss';

interface CardProps {
	titulo: string;
	footer: string;
	body: string;
}

const Card: React.FC<CardProps> = ({ titulo, footer, body }) => {
	return (
		<div className="d-flex mb-4 me-5">
			<div className={styles.card_line}></div>
			<div className={styles.card}>
				<div className={styles.card_body}>
					<h1>{titulo}</h1>
					<p>{body}</p>
				</div>
				<div className={styles.card_footer}>
					<p>{footer}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
