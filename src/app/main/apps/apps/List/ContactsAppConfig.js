import React from 'react';
import { Redirect } from 'react-router-dom';
import { authRoles } from 'app/auth';

const ContactsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
		
	},
	auth: authRoles.admin, // ['admin']

	routes: [
		{
			path: '/Users/:id',
			component: React.lazy(() => import('./User/ContactsApp.js'))
		},
		{
			path: '/Users',
			component: () => <Redirect to="/Users/all" />
		},	]
};

export default ContactsAppConfig;
