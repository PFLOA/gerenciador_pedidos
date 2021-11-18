import styles from './style.module.scss';

interface LoaderProps{
	tamanho?: number;
}
const Loader: React.FC<LoaderProps> = ({ tamanho = 50 }) => {
	return (
		<>
			<div className={styles.loader} style={{width: `${tamanho}px`, height: `${tamanho}px` }}></div>
		</>
	);
};

export default Loader;
