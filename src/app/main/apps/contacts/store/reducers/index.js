import { combineReducers } from 'redux';
import contacts from './contacts.reducer';
import user from './user.reducer';
import group from './group.reducer';

const reducer = combineReducers({
	contacts,
	user,
	group
});

export default reducer;
