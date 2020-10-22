import { authRoles } from 'app/auth';
import MaterialUIComponentsNavigation from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'Users',
		title: 'Users',
		translate: 'Users',
		type: 'group',
		icon: 'apps',
		children: [
			
			{
				id: 'Users',
				title: 'Users',
				translate: 'Users',
				type: 'item',
				icon: 'People',
				url: '/Users'
			},
			
		]
	},

	

];

export default navigationConfig;
