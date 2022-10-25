<script setup>
import { useMeta } from 'vue-meta'
const siteName = 'Site Name'

useMeta({ title: '', htmlAttrs: { lang: 'en', amp: true }})
</script>

<template lang="pug">
div
  metainfo
    template(v-slot:title='{ content }')
      | {{ content ? `${content} | ${siteName}` : siteName }}
  router-view
</template>

<style scoped></style>
