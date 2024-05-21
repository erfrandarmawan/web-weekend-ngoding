import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faChevronRight, faChevronLeft);
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});