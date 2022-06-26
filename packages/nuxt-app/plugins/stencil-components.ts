import { ComponentLibrary } from 'vue-library';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(ComponentLibrary)
})