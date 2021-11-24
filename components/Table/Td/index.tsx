import { HTMLAttributes } from 'react';
import styles from './style.module.scss';

interface TdProps {
	align?: 'center';
	tooltip?: boolean;
	titleTooltip?: string;
}

const Td: React.FC<TdProps> = ({ align, tooltip = false, titleTooltip, children }) => {
	return tooltip ? (
		<td data-toggle="tooltip" data-placement="right" title={titleTooltip} className={`${align == 'center' && 'text-center'} ${styles.td}`}>
			{children}
		</td>
	) : (
		<td className={`${align == 'center' && 'text-center'} ${styles.td}`}>{children}</td>
	);
};

export default Td;
