export interface User {
	email: string,
	password: string,
	returnSecureToken?: boolean,
	isAdmin?: boolean
}
export interface FbAuthResponse {
	displayName: string,
	email: string,
	expiresIn: string,
	idToken: string,
	kind: string,
	localId: string,
	refreshToken: string,
	registered: boolean
}
export interface Firebase {
	apiKey: string,
	authDomain: string,
	projectId: string,
	storageBucket: string,
	messagingSenderId: string,
	appId: string
}