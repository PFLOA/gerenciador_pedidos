import styles from './style.module.scss';

interface ThProps {
	width?: number;
}
const Th: React.FC<ThProps> = ({ width, children }) => {
	return (
		<th className={styles.th} style={{ width: `${width ? width + 'px' : '100%'}` }}>
			{children}
		</th>
	);
};

export default Th;
