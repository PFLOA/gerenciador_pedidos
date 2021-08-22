import Link from 'next/link';
import { useMemo } from 'react';
import { IconType } from 'react-icons';
import { BiGridAlt, BiX } from 'react-icons/bi';
import { FaHome, FaAddressBook } from 'react-icons/fa';
interface SidebarProps {
	active: string;
}
interface MenuProps {
	id: number;
	label: string;
	img: any;
	to: string;
	active: string;
}

const Menu = (item: MenuProps, index: number) => {
	const linkAtivo = useMemo(() => {
		return item.to == item.active ? true : false;
	}, [item]);

	return (
		<>
			<div
				className={`menu-item ${linkAtivo && 'menu-item-ativo'}`}
				key={index}
			>
				<Link href={`/${item.to}`} passHref>
					<button type="button" className="link-btn">
						<div className="data">
							<div className="img">{item.img}</div>
							<p>{item.label}</p>
						</div>
					</button>
				</Link>
			</div>
		</>
	);
};
const Sidebar: React.FC<SidebarProps> = ({ active }) => {
	const rotas = [
		{
			id: 1,
			img: <FaHome size={16} />,
			label: 'Dashboard',
			to: 'dashboard',
			active: active,
		},
		{
			id: 2,
			img: <FaAddressBook size={16} />,
			label: 'Clientes',
			to: 'cliente',
			active: active,
		},
	];
	return (
		<>
			<input type="checkbox" id="check" />
			<label htmlFor="check" className="toggle-sidebar">
				<BiGridAlt size={32} id="open" color="white" />
				<BiX size={32} id="close" color="white" />
			</label>
			<div className="sidebar">
				<div className="d-flex flex-column mt-5">
					<div className="menu">{rotas.map(Menu)}</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
