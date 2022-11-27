<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@src/components/HelloWorld.vue'

const title = ref('Vite + Vue3 + Unocss + PrimeVue')
</script>

<template>
  <div flex flex-col pt-8 gap-4>
    <hello-world :text="title" />
    <div flex justify-center gap-4>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" w-20 alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" w-20 alt="Vue logo">
      </a>
      <a href="https://uno.antfu.me/" target="_blank">
        <img src="../assets/unocss.svg" w-20 alt="Vue logo">
      </a>
      <a href="https://www.primefaces.org/primevue/setup" target="_blank">
        <img src="../assets/primevue-logo-dark.svg" w-20 alt="primevue logo">
      </a>
    </div>
    <div flex justify-center items-center gap-2>
      <p>@iconify-json/ic</p>
      <div i-ic-baseline-add-circle text-primary />
    </div>
    <div flex gap-2 justify-center>
      <p>fonts</p>
      <p font-mono>
        mono
      </p>
      <p font-sans>
        sans
      </p>
      <p font-serif>
        serif
      </p>
      <p font-helvetica>
        helvetica
      </p>
    </div>
    <div flex justify-center items-center gap-2>
      <p>primevue component</p>
      <p-button label="hi" />
    </div>
  </div>
</template>

<style scoped>

</style>
