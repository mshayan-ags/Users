import generic from './generic.actions';

export * from './contacts.actions';
export * from './user.actions';
export const groups = generic({
	pruler: 'groups',
	api: {
		get: '/api/crud/get?entity=groups',
		add: '/api/crud/add?entity=groups',
		update: '/api/crud/update?entity=groups',
		remove: '/api/crud/remove?entity=groups',
		removeMany: '/api/crud/removeMany?entity=groups'
	}
});
export const Global_Permissions = generic({
	pruler: 'Global_Permissions',
	api: {
		get: '/api/crud/get?entity=Global_Permissions',
		add: '/api/crud/add?entity=Global_Permissions',
		update: '/api/crud/update?entity=Global_Permissions',
		remove: '/api/crud/remove?entity=Global_Permissions',
		removeMany: '/api/crud/removeMany?entity=Global_Permissions'
	}
});

export const Static_Placeholder = generic({
	pruler: 'Static_Placeholder',
	api: {
		get: '/api/crud/get?entity=Static_Placeholder',
		add: '/api/crud/add?entity=Static_Placeholder',
		update: '/api/crud/update?entity=Static_Placeholder',
		remove: '/api/crud/remove?entity=Static_Placeholder',
		removeMany: '/api/crud/removeMany?entity=Static_Placeholder'
	}
});

export const User_Group_PAGE = generic({
	pruler: 'User_Group_PAGE',
	api: {
		get: '/api/crud/get?entity=User_Group_PAGE',
		add: '/api/crud/add?entity=User_Group_PAGE',
		update: '/api/crud/update?entity=User_Group_PAGE',
		remove: '/api/crud/remove?entity=User_Group_PAGE',
		removeMany: '/api/crud/removeMany?entity=User_Group_PAGE'
	}
});

export const Blog_Categories = generic({
	pruler: 'Blog_Categories',
	api: {
		get: '/api/crud/get?entity=Blog_Categories',
		add: '/api/crud/add?entity=Blog_Categories',
		update: '/api/crud/update?entity=Blog_Categories',
		remove: '/api/crud/remove?entity=Blog_Categories',
		removeMany: '/api/crud/removeMany?entity=Blog_Categories'
	}
});

export const BLOG_CONFIG = generic({
	pruler: 'BLOG_CONFIG',
	api: {
		get: '/api/crud/get?entity=BLOG_CONFIG',
		add: '/api/crud/add?entity=BLOG_CONFIG',
		update: '/api/crud/update?entity=BLOG_CONFIG',
		remove: '/api/crud/remove?entity=BLOG_CONFIG',
		removeMany: '/api/crud/removeMany?entity=BLOG_CONFIG'
	}
});

export const blogArticles = generic({
	pruler: 'blogArticles',
	api: {
		get: '/api/crud/get?entity=blogArticles',
		add: '/api/crud/add?entity=blogArticles',
		update: '/api/crud/update?entity=blogArticles',
		remove: '/api/crud/remove?entity=blogArticles',
		removeMany: '/api/crud/removeMany?entity=blogArticles'
	}
});

export const Sites = generic({
	pruler: 'Sites',
	api: {
		get: '/api/crud/get?entity=Sites',
		add: '/api/crud/add?entity=Sites',
		update: '/api/crud/update?entity=Sites',
		remove: '/api/crud/remove?entity=Sites',
		removeMany: '/api/crud/removeMany?entity=Sites'
	}
});

export const Snippets = generic({
	pruler: 'Snippets',
	api: {
		get: '/api/crud/get?entity=Snippets',
		add: '/api/crud/add?entity=Snippets',
		update: '/api/crud/update?entity=Snippets',
		remove: '/api/crud/remove?entity=Snippets',
		removeMany: '/api/crud/removeMany?entity=Snippets'
	}
});

export const Tag = generic({
	pruler: 'Tag',
	api: {
		get: '/api/crud/get?entity=Tag',
		add: '/api/crud/add?entity=Tag',
		update: '/api/crud/update?entity=Tag',
		remove: '/api/crud/remove?entity=Tag',
		removeMany: '/api/crud/removeMany?entity=Tag'
	}
});
// Step 2