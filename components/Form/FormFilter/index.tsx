import { RefObject } from 'react';
import FormButton from '../FormButton';

import styles from './style.module.scss';

interface FormFilter {
	onSubmit(e: any): void;
	formRef:  RefObject<HTMLFormElement>;
	link?: string;
	clearFilter(): void;
}
const FormFilter: React.FC<FormFilter> = ({
	link,
	onSubmit,
	formRef,
	children,
	clearFilter
}) => {
	return (
		<form onSubmit={onSubmit} className={styles.form} ref={formRef}>
			<div className={styles.inputs}>{children}</div>
			<div className={styles.submit}>
				<FormButton link={link} handleClearFilter={clearFilter} />
			</div>
		</form>
	);
};

export default FormFilter;
