<template>
  <div class="h-full w-full flex py-10 pt-24 px-10 justify-center">
    <div class="flex flex-col items-center justify-center gap-6">
      <h1 class="animate-[fade-in_1s_ease-in-out] text-5xl">
        Hello <span class="text-cyan-700">{{ username }}</span>
      </h1>
      <nuxt-link
        to="/order"
        class="rounded-full py-4 px-10 bg-white text-cyan-500 border border-cyan-500 text-xl font-medium hover:bg-cyan-600 hover:text-white"
        >See All Order</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    username() {
      return this.$store.state.auth.username
    },
  },
  beforeMount() {
    if (!this.$store.state.auth.token) {
      this.$router.push('/auth/login')
    }
  },
}
</script>
