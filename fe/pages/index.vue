<template>
  <div class="w-full">
    <h1>Hello {{ username }}</h1>
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
