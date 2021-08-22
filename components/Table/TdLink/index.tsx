import Link from 'next/link';
import Td from '../Td';

import styles from './style.module.scss';

interface TdLinkProps {
	link: string;
}
const TdLink: React.FC<TdLinkProps> = ({ link, children }) => {
	return (
		<Td>
			<Link href={link}>
				<a className={styles.link}>{children}</a>
			</Link>
		</Td>
	);
};

export default TdLink;
