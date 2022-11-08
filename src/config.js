const isProduction = (process.env.NODE_ENV === 'production');

const API_URL = isProduction
	? process.env.REACT_APP_PROD_API_URL
	: process.env.REACT_APP_DEV_API_URL;

const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_DBURL,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STRBUCKET,
	messagingSenderId: process.env.REACT_APP_MSGSENDERID,
	appId: process.env.REACT_APP_APPID,
};

export {
	isProduction,
	API_URL,
	firebaseConfig,
};
