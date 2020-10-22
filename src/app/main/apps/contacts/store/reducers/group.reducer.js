import * as Actions from '../actions';

const groupReducer = (state = {}, action) => {
	switch (action.type) {
		case Actions.GET_group_DATA:
			return action.payload;
		default:
			return state;
	}
};

export default groupReducer;
