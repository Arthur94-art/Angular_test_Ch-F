export interface User {
	email: string,
	password: string,
	returnSecureToken?: boolean,
	isAdmin?: boolean
}
export interface FbAuthResponse {
	idToken: string,
	expiresIn: string
}