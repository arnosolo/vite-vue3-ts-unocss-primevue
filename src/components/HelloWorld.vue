<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <h1 text-center text-gray-700>
      {{ text }}
    </h1>
  </div>
</template>

<style scoped>

</style>
