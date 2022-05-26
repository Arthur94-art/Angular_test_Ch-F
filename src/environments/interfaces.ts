import { Firebase } from "src/app/interfaces/interfaces";

export interface Env {
	firebase: Firebase,
	production: boolean,
	mapbox: {
		accessToken: string,
	},
}