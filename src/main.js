import Vue from 'vue'
import App from './App.vue'
import router from './router'

import i18n from '@/plugins/i18n';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

import * as VueGoogleMaps from 'vue2-google-maps';

import VueBreadcrumbs from 'vue-2-breadcrumbs';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAYDiEDtS1e-YaJSpB7CGKZAnxmAbmdSpo', // Viktorov key, ne pipati. Hvala lepo.
        libraries: 'places',
    }
});

Vue.use(VueBreadcrumbs, {
    template:
        '        <nav v-if="$breadcrumbs.length" aria-label="breadcrumb">\n' +
        '            <ol class="breadcrumb">\n' +
        '                <li v-for="(crumb, key) in $breadcrumbs" v-if="crumb.meta.breadcrumb" :key="key" class="breadcrumb-item active" aria-current="page">\n' +
        '                    {{ $t(getBreadcrumb(crumb.meta.breadcrumb)) }}' +
        '                </li>\n' +
        '            </ol>\n' +
        '        </nav>'
});

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
