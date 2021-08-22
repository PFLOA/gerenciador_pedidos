import Head from 'next/head';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import styles from './style.module.scss';

interface LayoutProps {
	active: string;
}
const Layout: React.FC<LayoutProps> = ({ children, active }) => {
	return (
		<>
			<div className={styles.nav}>
				<Sidebar active={active} />
				<Navbar />
			</div>
			<div className={styles.layout}>
				<div className={styles.container}>
					<div className={styles.card}>{children}</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
