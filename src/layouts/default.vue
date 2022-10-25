<script setup>
import { useMenusStore } from '~/stores/menus'

const menusStore = useMenusStore()
</script>

<template lang="pug">
div
  router-view
</template>

<style lang="scss" scoped></style>