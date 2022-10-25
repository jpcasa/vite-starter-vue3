<script setup>
import { useMeta } from 'vue-meta'
useMeta({ title: 'Home' })
</script>

<template lang="pug">
div
  ExampleForm
  h1 Home
</template>

<style lang="scss" scoped>
h1 {
  @apply text-slate-900;
}
</style>