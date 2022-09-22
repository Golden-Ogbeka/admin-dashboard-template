import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import AuthenticatedNav from './AuthenticatedNav';
import PublicNav from './PublicNav';

function Navbar() {
	const { authenticated } = useAppSelector((state) => state.user);
	return <>{authenticated ? <AuthenticatedNav /> : <PublicNav />}</>;
}

export default Navbar;
