import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeadElement from '../components/layout/HeadElement';
import { wrapper } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadElement />
			<Component {...pageProps} />
		</>
	);
}

export default wrapper.withRedux(MyApp);
