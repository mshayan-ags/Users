import React from 'react';
import { Redirect } from 'react-router-dom';

const ContactsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
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
