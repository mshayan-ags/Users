const prodConfig = {
	apiKey: "AIzaSyC1zeumyGbN53GFHhEGz2PcVMrF0bKIV7A",
	authDomain: "camera-app-a.firebaseapp.com",
	databaseURL: "https://camera-app-a.firebaseio.com",
	projectId: "camera-app-a",
	storageBucket: "camera-app-a.appspot.com",
	messagingSenderId: "171082005622",
	appId: "1:171082005622:web:7faf1a206348f3831ab357",
};

const devConfig = {
	apiKey: "AIzaSyC1zeumyGbN53GFHhEGz2PcVMrF0bKIV7A",
	authDomain: "camera-app-a.firebaseapp.com",
	databaseURL: "https://camera-app-a.firebaseio.com",
	projectId: "camera-app-a",
	storageBucket: "camera-app-a.appspot.com",
	messagingSenderId: "171082005622",
	appId: "1:171082005622:web:7faf1a206348f3831ab357",
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
