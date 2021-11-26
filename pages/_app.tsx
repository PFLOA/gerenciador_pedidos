import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Hooks from '../hooks';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Hooks>
			<Component {...pageProps} />
		</Hooks>
	);
}
export default MyApp;
