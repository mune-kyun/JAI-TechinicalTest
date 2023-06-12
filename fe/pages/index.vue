<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  beforeMount() {
    if (!this.$store.state.auth.token) {
      this.$router.push('/auth/login')
    }
  },
}
</script>
