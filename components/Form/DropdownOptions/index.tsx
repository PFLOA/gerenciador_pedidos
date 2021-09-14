interface DropdownOptionsProps {
	value: string;
	name: string;
}
const DropdownOptions: React.FC<DropdownOptionsProps> = ({ value, name }) => {
	return <option value={value}>{name}</option>;
};

export default DropdownOptions;
