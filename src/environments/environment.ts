// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Env} from "./interfaces";
export const environment: Env = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYnJhc2thbSIsImEiOiJja3NqcXBzbWoyZ3ZvMm5ybzA4N2dzaDR6In0.RUAYJFnNgOnn80wXkrV9ZA',
  },
  firebase: {
    apiKey: "AIzaSyAIry0S-9_9EOLvBPrRe8sYFxlOv3j0VEI",
    authDomain: "ch-f-e0fe5.firebaseapp.com",
    projectId: "ch-f-e0fe5",
    storageBucket: "ch-f-e0fe5.appspot.com",
    messagingSenderId: "581099751196",
    appId: "1:581099751196:web:e4511e788907fa286edcd9"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
