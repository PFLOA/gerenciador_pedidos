import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	error?: string;
	opcional?: boolean;
}

const Input: React.FC<InputProps> = ({
	label,
	type,
	value,
	name,
	error,
	opcional,
	...rest
}) => {
	//#region [ UseMemo ]

	//#endregion

	return (
		<div className={`d-flex flex-column mb-1 mx-0 ${styles.input_h}`}>
			{label && (
				<label htmlFor={label} className="mb-1">
					<div className="d-flex justify-content-between">
						<div className={styles.styled_label}>
							<p className={error && styles.styled_label_error}>
								{label}
							</p>
						</div>
						{opcional && (
							<div className={styles.opcional}>
								{'(opcional)'}
							</div>
						)}
					</div>
				</label>
			)}
			<div className="d-flex">
				<input
					className={`form-control ${styles.styled_input} ${
						error && styles.styled_input_error
					}`}
					value={value}
					type={type}
					id={name}
					name={name}
					{...rest}
				/>
			</div>
			<p className={`${styles.error_p}`}>{error && error}</p>
		</div>
	);
};

export default Input;
