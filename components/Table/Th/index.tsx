import styles from './style.module.scss';

interface ThProps {
	width?: number;
	align?: 'center'
}
const Th: React.FC<ThProps> = ({ width, align, children }) => {
	return (
		<th className={`${align == 'center' && 'text-center'} ${styles.th}`} style={{ width: `${width ? width + 'px' : '100%'}` }}>
			{children}
		</th>
	);
};

export default Th;
