import styles from './style.module.scss';

const Td: React.FC = ({ children }) => {
	return <td className={styles.td}>{children}</td>;
};

export default Td;
