import './assets/main.css'
import 'vueperslides/dist/vueperslides.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import Lara from '@primevue/themes/lara';

import Menubar from 'primevue/menubar';
import Galleria from 'primevue/galleria';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import { VueperSlides, VueperSlide } from 'vueperslides'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.my-app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});

app.component('Menubar', Menubar);
app.component('Galleria', Galleria);
app.component('RadioButton', RadioButton);
app.component('Button', Button);
app.component('VueperSlide', VueperSlide);
app.component('VueperSlides', VueperSlides);

app.mount('#app')
