import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeadElement from '../components/layout/HeadElement';
import { wrapper } from '../app/store';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		// get state's default values
	}, []);
	return (
		<>
			<HeadElement />
			<Component {...pageProps} />
		</>
	);
}

export default wrapper.withRedux(MyApp);
