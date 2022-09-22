import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getSessionDetails } from '../../functions/userSession';
import { closeAlert, openAlert } from '../../store/slices/alertSlice';

function RestrictedRoute(Component, options = {}, ...props) {
	const useRestrictedRoute = () => {
		const [loading, setLoading] = React.useState(true);
		const router = useRouter();
		const dispatch = useDispatch();

		React.useEffect(() => {
			const sessionDetails = getSessionDetails();
			if (!sessionDetails) {
				setLoading(false);
			} else {
				dispatch(openAlert({ message: 'You are already logged in', type: 'info' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);
				router.push(options.pathAfterFailure || '/dashboard');
			}
		}, [router, dispatch]);

		return loading ? <div /> : <Component {...props} />;
	};
	return useRestrictedRoute;
}

export default RestrictedRoute;
