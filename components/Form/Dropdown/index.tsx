import React, { useEffect, useRef, useState } from 'react';
import { useMemo } from 'react-transition-group/node_modules/@types/react';
import { debounce } from '../../../utils/handleChanges';
import Loader from '../../Loader';

import style from './style.module.scss';

interface FormButton {
	callback(req: string): void;
	close: boolean;
	label: string;
	nomeItem: string;
}

const Dropdown: React.FC<FormButton> = ({ callback, close, label, nomeItem, children }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleDropdown = () => {
		const optionsContainer = document.querySelector(`.${style.options_container}`);
		optionsContainer?.classList.toggle(`${style.active}`);
	};

	useEffect(() => {
		if(close)
			handleDropdown()
	}, [close])

	return (
		<>
			<div>
				<label className="mb-1">{label}</label>
				<div className={style.select_box}>
					<div className={`${style.options_container}`}>
						<div className={style.option}>
							<input
								autoComplete="off"
								type="text"
								className={`form-control`}
								id="filtro"
								name="filtro"
								placeholder={`Pesquisar ${label}`}
								ref={inputRef}
								onChange={(e: any) =>
									debounce(() => {
										if (e.target.name == 'filtro') {
											callback(e.target.value);
										}
									})
								}
							/>
						</div>
						{children}
					</div>
					<div className={style.selected} onClick={handleDropdown}>
						<label className={`${style.label}`} id="nomeItem">
							{nomeItem}
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dropdown;
