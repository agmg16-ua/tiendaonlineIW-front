import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonicVue, IonItem, IonLabel, IonRow, IonTitle } from '@ionic/vue';

import { addIcons } from 'ionicons';
import { carOutline, cartOutline, headsetOutline, lockClosedOutline, refreshOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(createPinia())
  .use(router);


app.component('ion-title', IonTitle)
  .component('ion-card-content', IonCardContent)
  .component('ion-card', IonCard)
  .component('ion-card-title', IonCardTitle)
  .component('ion-card-header', IonCardHeader)
  .component('ion-col', IonCol)
  .component('ion-row', IonRow)
  .component('ion-icon', IonIcon)
  .component('ion-grid', IonGrid)
  .component('ion-button', IonButton)
  .component('ion-content', IonContent)
  .component('ion-label', IonLabel)
  .component('ion-item', IonItem)

addIcons({
  'car-outline': carOutline,
  'headset-outline': headsetOutline,
  'refresh-outline': refreshOutline,
  'lock-closed-outline': lockClosedOutline,
  'cart-outline': cartOutline
})

router.isReady().then(() => {
  app.mount('#app');
});
