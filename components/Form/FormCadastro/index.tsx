import FormCadastroButton from '../FormCadastroButton';

import styles from './style.module.scss';

interface FormFilter {
	onSubmit(e: any): void;
	formRef: any;
}
const FormCadastro: React.FC<FormFilter> = ({
	onSubmit,
	formRef,
	children,
}) => {
	return (
		<form onSubmit={onSubmit} className={styles.form} ref={formRef}>
			<div className={styles.inputs}>{children}</div>
			<div className={styles.submit}>
				<FormCadastroButton />
			</div>
		</form>
	);
};

export default FormCadastro;
