import style from './style.module.scss'

interface DropdownOptionsProps {
	value: string;
	name: string;
}

const DropdownOptions: React.FC<DropdownOptionsProps> = ({ value, name }) => {
	return (
				<div className={`m-0 ${style.option_paragraph}`}>
					<option value={value}>{name}</option>
				</div>
				);
};

export default DropdownOptions;
