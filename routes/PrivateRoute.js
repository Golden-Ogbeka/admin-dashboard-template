import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getSessionDetails } from '../../functions/userSession';
import { closeAlert, openAlert } from '../../store/slices/alertSlice';

function PrivateRoute(Component, options = {}, ...props) {
	const usePrivateRoute = () => {
		const [loading, setLoading] = React.useState(true);
		const router = useRouter();
		const dispatch = useDispatch();

		React.useEffect(() => {
			const sessionDetails = getSessionDetails();
			if (sessionDetails) {
				setLoading(false);
			} else {
				dispatch(openAlert({ message: 'Login to continue', type: 'info' }));
				setTimeout(() => {
					dispatch(closeAlert());
				}, 5000);

				router.push({
					pathname: options.pathAfterFailure || '/login',
					query: { history: router.pathname },
				});
			}
		}, [router, dispatch]);

		return loading ? <div /> : <Component {...props} />;
	};
	return usePrivateRoute;
}

export default PrivateRoute;
