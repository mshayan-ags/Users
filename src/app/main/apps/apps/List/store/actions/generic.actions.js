import axios from 'axios';
import _ from '@lodash';

export default ({pruler, api}) => {
	let exp = {};
	exp.GET = `[${pruler.toUpperCase()}_CRUD] GET ${pruler.toUpperCase()}`;
	exp.SET_SEARCH_TEXT = `[${pruler.toUpperCase()}_CRUD] SET SEARCH TEXT`;
	exp.OPEN_NEW_DIALOG = `[${pruler.toUpperCase()}_CRUD] OPEN NEW DIALOG`;
	exp.CLOSE_NEW_DIALOG = `[${pruler.toUpperCase()}_CRUD] CLOSE NEW DIALOG`;
	exp.OPEN_EDIT_DIALOG = `[${pruler.toUpperCase()}_CRUD] OPEN EDIT DIALOG`;
	exp.CLOSE_EDIT_DIALOG = `[${pruler.toUpperCase()}_CRUD] CLOSE EDIT DIALOG`;
	exp.ADD = `[${pruler.toUpperCase()}_CRUD] ADD`;
	exp.UPDATE = `[${pruler.toUpperCase()}_CRUD] UPDATE`;
	exp.REMOVE = `[${pruler.toUpperCase()}_CRUD] REMOVE`;
	exp.REMOVE_MANY = `[${pruler.toUpperCase()}_CRUD] REMOVE MANY`;
	
	exp.get = () => {
		const request = axios.get(api.get);
	
		return dispatch =>
			request.then(response => {
				console.log(response)
				dispatch({
					type: exp.GET,
					payload: response.data
				})
			}
			);
	}
	
	exp.setSearchText = (event) => {
		return {
			type: exp.SET_SEARCH_TEXT,
			searchText: event.target.value
		};
	}
	
	exp.openNewDialog = () => {
		return {
			type: exp.OPEN_NEW_DIALOG
		};
	}
	
	exp.closeNewDialog = () => {
		return {
			type: exp.CLOSE_NEW_DIALOG
		};
	}
	
	exp.openEditDialog = (data) => {
		return {
			type: exp.OPEN_EDIT_DIALOG,
			data
		};
	}
	
	exp.closeEditDialog = () => {
		return {
			type: exp.CLOSE_EDIT_DIALOG
		};
	}
	
	exp.add = (data) => {
		return (dispatch, getState) => {
			const { routeParams } = getState().crud[pruler];
	
			const request = axios.post(api.add, {data});
	
			return request.then(response =>
				Promise.all([
					dispatch({
						type: exp.ADD
					})
				]).then(() => dispatch(exp.get(routeParams)))
			);
		};
	}
	
	exp.update = (contact) => {
		return (dispatch, getState) => {
			const { routeParams } = getState().crud[pruler];
	
			const request = axios.post(api.update, {
				contact
			});
	
			return request.then(response =>
				Promise.all([
					dispatch({
						type: exp.UPDATE
					})
				]).then(() => dispatch(exp.get(routeParams)))
			);
		};
	}
	
	exp.remove = (id) => {
		return (dispatch, getState) => {
			const { routeParams } = getState().crud[pruler];
	
			const request = axios.post(api.remove, {
				id
			});
	
			return request.then(response =>
				Promise.all([
					dispatch({
						type: exp.REMOVE
					})
				]).then(() => dispatch(exp.get(routeParams)))
			);
		};
	}
	
	exp.removeMany = (ids) => {
		return (dispatch, getState) => {
			const { routeParams } = getState().crud[pruler];
	
			const request = axios.post(api.removeMany, {
				ids
			});
	
			return request.then(response =>
				Promise.all([
					dispatch({
						type: exp.REMOVE
					})
				]).then(() => dispatch(exp.get(routeParams)))
			);
		};
	}

	const initialState = {
		entities: null,
		searchText: '',
		routeParams: {},
		dialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	};
	
	exp.reducer = (state = initialState, action) => {
		console.log(action)
		switch (action.type) {
			case exp.GET: {
				console.log(exp.GET)
				return {
					...state,
					entities: _.keyBy(action.payload, 'id'),
					routeParams: action.routeParams
				};
			}
			case exp.SET_SEARCH_TEXT: {
				return {
					...state,
					searchText: action.searchText
				};
			}
			case exp.OPEN_NEW_DIALOG: {
				return {
					...state,
					dialog: {
						type: 'new',
						props: {
							open: true
						},
						data: null
					}
				};
			}
			case exp.CLOSE_NEW_DIALOG: {
				return {
					...state,
					dialog: {
						type: 'new',
						props: {
							open: false
						},
						data: null
					}
				};
			}
			case exp.OPEN_EDIT_DIALOG: {
				return {
					...state,
					dialog: {
						type: 'edit',
						props: {
							open: true
						},
						data: action.data
					}
				};
			}
			case exp.CLOSE_EDIT_DIALOG: {
				return {
					...state,
					dialog: {
						type: 'edit',
						props: {
							open: false
						},
						data: null
					}
				};
			}
			default: {
				return state;
			}
		}
	};
	return exp
}

