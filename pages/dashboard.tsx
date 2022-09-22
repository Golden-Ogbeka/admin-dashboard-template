import React from 'react';
import PrivateRoute from '../routes/PrivateRoute';

function Dashboard() {
	return <div>Dashboard</div>;
}

export default PrivateRoute(Dashboard, { pathAfterFailure: '/login' });
