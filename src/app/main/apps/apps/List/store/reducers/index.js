import { combineReducers } from 'redux';
import contacts from './contacts.reducer';
import user from './user.reducer';
import { groups, Global_Permissions , Static_Placeholder , User_Group_PAGE , Blog_Categories ,Tag ,Snippets ,BLOG_CONFIG , blogArticles ,Sites} from '../actions';

const reducer = combineReducers({
	contacts,
	user,
	groups: groups.reducer, // step3
	Global_Permissions: Global_Permissions.reducer,
	Static_Placeholder: Static_Placeholder.reducer,
	User_Group_PAGE: User_Group_PAGE.reducer,
	Blog_Categories: Blog_Categories.reducer,
	BLOG_CONFIG: BLOG_CONFIG.reducer,
	blogArticles: blogArticles.reducer,
	Sites: Sites.reducer,
	Tag: Tag.reducer,
	Snippets: Snippets.reducer,


});

export default reducer;
