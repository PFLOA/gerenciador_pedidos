import { useEffect, useRef } from 'react';

import style from './style.module.scss';

interface FormButton {
	callback(req: string): void;
	setData?: any;
	label: string;
}

const Dropdown: React.FC<FormButton> = ({
	callback,
	setData,
	label,
	children,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownOptions = useRef<HTMLDivElement>(null);

	function abre() {
		let comp = dropdownOptions?.current;
		if (comp) comp.style.display = 'block';
	}

	function fecha() {
		let comp = dropdownOptions?.current;
		if (comp) comp.style.display = 'none';
	}

	const handleChange = (e: any) => {
		if (e.target.name == 'filtro') {
			callback(e.target.value);
			abre();
		}
	};
	const handleClearInput = () => {
		if (inputRef) {
			const input = inputRef.current;
			if (input) input.value = '';
		}
	};

	useEffect(() => {
		document.addEventListener('click', (event: any) => {
			fecha();
			dropdownOptions?.current?.addEventListener(
				'click',
				function (e: any) {
					if (inputRef) {
						const input = inputRef.current;
						if (input) {
							setData(e.target.value);
							input.value = e.target.text;
						}
					}
				}
			);
		});
	}, []);

	return (
		<div className="d-flex flex-column">
			<label className="mb-1">{label}</label>
			<div className="d-flex align-items-center">
				<input
					className={`form-control ${style.styled_input}`}
					type="text"
					name="filtro"
					onChange={handleChange}
					ref={inputRef}
				/>
				{inputRef?.current?.value && (
					<div className={style.clear_btn} onClick={handleClearInput}>
						Clear
					</div>
				)}
			</div>
			<div className={style.dropdown} tabIndex={0} ref={dropdownOptions}>
				{children}
			</div>
		</div>
	);
};

export default Dropdown;
