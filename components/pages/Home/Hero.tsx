import React from 'react';
import { useAppSelector } from '../../../app/hooks';

function Hero() {
	const store = useAppSelector((state) => state.alert.open);
	return <section>{store.toString()}</section>;
}

export default Hero;
