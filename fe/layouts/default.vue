<template>
  <div class="min-w-screen min-h-screen">
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
export default {
  components: {
    AppHeader,
  },
}
</script>
