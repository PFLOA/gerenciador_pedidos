import React from 'react';
import { BiExit } from 'react-icons/bi';
import { logout } from '../../service/auth';
import styles from './style.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className="d-flex justify-content-end align-items-center h-100">
				<div className="me-2">
					<a href="#" onClick={logout}>
						<BiExit size={38} />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
