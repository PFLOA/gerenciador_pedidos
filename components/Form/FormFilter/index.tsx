import FormButton from '../FormButton';

import styles from './style.module.scss';

interface FormFilter {
	onSubmit(e: any): void;
	link?: string;
}
const FormFilter: React.FC<FormFilter> = ({ link, onSubmit, children }) => {
	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<div className={styles.inputs}>{children}</div>
			<div className={styles.submit}>
				<FormButton link={link} />
			</div>
		</form>
	);
};

export default FormFilter;
