import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { router } from '@/router';
import App from './App.vue';

import ua from './locales/ua.json';
import en from './locales/en.json';

import '@/assets/scss/style.scss';

type MessageSchema = typeof ua;

const i18n = createI18n<[MessageSchema, ua | en]>({
  legacy: false,
  locale: 'ua',
  messages: { ua, en }
});
const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount('#app');