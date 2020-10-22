// // import mock from '../mock';
// import mockXHR from 'xhr-mock';

// const formDB = {
// 	data: JSON.parse(localStorage.getItem('form_builder') || '{}')
// }

// mockXHR.setup().get('/api/form', (req, res) => {
// 	return res.status(200).body(formDB.data);
// }).post('/api/form', (req, res) => {
// 	const data = JSON.parse(req.body());
// 	formDB.data = data;
// 	localStorage.setItem('form_builder', JSON.stringify(data))
// 	return res.status(200).body(formDB.data);
// });