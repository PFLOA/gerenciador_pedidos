import styles from './style.module.scss';
interface TrProps {
	index: number;
}
const Tr: React.FC<TrProps> = ({ index, children }) => {
	return (
		<tr
			className={`${index % 2 == 0 ? styles.par : styles.impar} ${
				styles.tr
			}`}
		>
			{children}
		</tr>
	);
};

export default Tr;
