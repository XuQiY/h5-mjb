import { createApp } from 'vue'
import App from './App.vue'
import { loadPackFactory, mjbPlugin } from '../utils/mjb';

(async () => {
    const app = createApp(App)
    /**通过url携带包名 */
    const appName = new URLSearchParams(location.search).get('appName') || 'vue'
    const mjbConfig = await loadPackFactory(appName)
    app.use(mjbPlugin, mjbConfig);
    app.mount('#app');
    return app
  })();
  