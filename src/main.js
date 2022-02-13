import Vue from "vue";

import "./style.css";

import { fakeBackend } from "./_helpers";
fakeBackend();

import {
    initFacebookSdk,
    jwtInterceptor,
    errorInterceptor,
    router,
} from "./_helpers";
import App from "./App.vue";


jwtInterceptor();
errorInterceptor();


initFacebookSdk().then(starApp);



function starApp() {
    new Vue({
        router,
        render: (h) => h(App),
    }).$mount("#app");
}