import { useRef } from 'react';

import Input from '../Input';

interface FormButton {
	callback(req: string): void;
}
const Dropdown: React.FC<FormButton> = ({ callback, children }) => {
	const filterRef = useRef(null);
	const handleChange = (e: any) => {
		if (e.target.name == 'filtro') callback(e.target.value);
	};
	return (
		<div>
			<div className="d-flex flex-column">
				<form ref={filterRef}>
					<Input
						type="text"
						name="filtro"
						label="Pesquisar Cliente"
						onChange={handleChange}
					/>
					{children}
				</form>
			</div>
		</div>
	);
};

export default Dropdown;
