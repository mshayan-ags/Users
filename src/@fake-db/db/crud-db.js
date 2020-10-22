import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mock from '../mock';

const crudDB = {
	groups: [],
	Global_Permissions: [],
	Static_Placeholder: [
		{
			id: '5725a680b3249760ea21de52',
			PlaceHolderName: 'Header',
			PlaceHolderCode: 'header',
			Site: '-',
			CREATION_METHOD: 'By Template'
		},
		{
			id: '5725a680606588342058356d',
			PlaceHolderName: 'Footer',
			PlaceHolderCode: 'Footer',
			Site: '-',
			CREATION_METHOD: 'By Template'
		}
	],
	User_Group_PAGE: [
		{
			id: '5725a680b3249760ea21de52',
			Name: 'Header',
			CREATED_By: 'admin'
		},
		{
			id: '5725a680606588342058356d',
			Name: 'Footer',
			CREATED_By: 'admin'
		}
	],
	Blog_Categories: [
		{
			id: '5725a680b3249760ea21de52',
			Name: 'Header',
			Parent: '-',
			Appconfig: 'Blog/Blog',
			Languages: 'EN'
		},
		{
			id: '5725a680606588342058356d',
			Name: 'Header',
			Parent: '-',
			Appconfig: 'Blog/Blog',
			Languages: 'EN'
		}
	],
	blogArticles: [
		{
			id: '5725a680606588342058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a68060658834205cx8356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a680606s588342058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a680606288342058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a68060658f342058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a6806065ff342058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a680606588342058x56e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a6806065883420238356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '35725a680606588342058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a680603588342058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a68060658242058356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a6806065883420583561',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a6806065883420583563',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a6806065883420583522e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		},
		{
			id: '5725a6806065883420583356e',
			Title: 'sharma',
			author: '-',
			publishedSince: 'Sept. 5, 2020, 11:28 p.m.',
			Appconfig: 'blog/blog',
			Languages: 'en',
			publishedUntil: '-'
		}
	],
	BLOG_CONFIG: [
		{
			id: '5725a680606588342058356d',
			Blog_Config: 'Blog/Blog'
		}
	],
	Sites: [
		{
			id: '5725a680606588342058356d',
			DISPLAY_NAME: '127.0.1.181',
			DOMAIN_NAME: 'Local'
		},
		{
			id: '725a6806065883420583356e',
			DISPLAY_NAME: 'Example.com',
			DOMAIN_NAME: 'Example.com'
		},
		{
			id: '5725a680606588342058356f',
			DISPLAY_NAME: '198.0.1.181',
			DOMAIN_NAME: 'Local'
		},
	],
	
	Snippets: [
		{
			id: '5725a680606588342058356d',
			Slug: '127.0.1.181',
			Name: 'Local'
		},
		{
			id: '725a6806065883420583356e',
			Slug: 'Example.com',
			Name: 'Example.com'
		},
		{
			id: '5725a680606588342058356f',
			Slug: '198.0.1.181',
			Name: 'Local'
		},
	],
	Tag: [],
	
};

mock.onGet(/api\/crud\/get\/?.*/).reply(config => {
	let query = parseQueryString(config.url);
	if (!query || !query.entity || !crudDB[query.entity]) return [404, 'not a valid entity in query params'];

	return [200, crudDB[query.entity]];
});
mock.onPost(/api\/crud\/add\/?.*/).reply(request => {
	const data = JSON.parse(request.data);
	let query = parseQueryString(request.url);
	if (!query || !query.entity || !crudDB[query.entity]) return [404, 'not a valid entity in query params'];
	crudDB[query.entity] = [
		...crudDB[query.entity],
		{
			...data.data,
			id: FuseUtils.generateGUID()
		}
	];
	return [200, crudDB[query.entity]];
});

mock.onPost(/api\/crud\/update\/?.*/).reply(request => {
	const data = JSON.parse(request.data);
	let query = parseQueryString(request.url);
	if (!query || !query.entity || !crudDB[query.entity]) return [404, 'not a valid entity in query params'];
	crudDB[query.entity] = crudDB[query.entity].map(item => {
		if (data.id === item.id) {
			return data;
		}
		return item;
	});

	return [200, crudDB[query.entity]];
});

mock.onPost(/api\/crud\/remove\/?.*/).reply(request => {
	const data = JSON.parse(request.data);
	let query = parseQueryString(request.url);
	if (!query || !query.entity || !crudDB[query.entity]) return [404, 'not a valid entity in query params'];
	crudDB[query.entity] = crudDB[query.entity].filter(item => data.id !== item.id);
	return [200, crudDB[query.entity]];
});

mock.onPost(/api\/crud\/removeMany\/?.*/).reply(request => {
	const data = JSON.parse(request.data);
	let query = parseQueryString(request.url);
	if (!query || !query.entity || !crudDB[query.entity]) return [404, 'not a valid entity in query params'];
	crudDB[query.entity] = crudDB[query.entity].filter(item => !data.ids.includes(item.id));
	return [200, crudDB[query.entity]];
});

function parseQueryString(url) {
	const queryString = url.replace(/.*\?/, '');

	if (queryString === url || !queryString) {
		return null;
	}

	const urlParams = new URLSearchParams(queryString);
	const result = {};

	urlParams.forEach((val, key) => {
		if (result.hasOwnProperty(key)) {
			result[key] = [result[key], val];
		} else {
			result[key] = val;
		}
	});

	return result;
}
