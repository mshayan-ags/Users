import axios from 'axios';

export const GET_group_DATA = '[CONTACTS APP] GET group DATA';

export function getgroupData() {
	const request = axios.get('/api/contacts-app/group');

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_group_DATA,
				payload: response.data
			})
		);
}
