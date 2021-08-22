import styles from './style.module.scss';
const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.card_body}>
				<h1>R$35000,00</h1>
				<p>ganho mensal</p>
			</div>
			<div className={styles.card_footer}>
				<p>referência: 08/2021</p>
			</div>
		</div>
	);
};

export default Card;
