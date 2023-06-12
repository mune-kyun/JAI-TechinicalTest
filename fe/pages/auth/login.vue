<template>
  <div class="h-full w-full flex pt-10 justify-center">
    <form
      ref="form"
      class="block p-6 bg-white border border-gray-400 rounded-lg shadow w-1/2"
    >
      <div class="mb-6">
        <CInput v-model="username" v-bind="inputData[0]" />
        <CInput v-model="password" v-bind="inputData[1]" />
      </div>
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        @click.prevent="submitForm"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CInput from '~/components/universal/CInput.vue'

export default {
  name: 'LoginPage',
  components: {
    CInput,
  },
  data() {
    return {
      username: '',
      password: '',
      inputData: [
        {
          label: 'Username',
          type: 'text',
          placeholder: 'mrhacka',
          val: '',
          required: true,
        },
        {
          label: 'Password',
          type: 'password',
          placeholder: '********',
          val: '',
          required: true,
        },
      ],
      error: '',
    }
  },
  methods: {
    ...mapActions({
      setToken: 'auth/setToken',
      setUsername: 'auth/setUsername',
    }),
    submitForm: async function () {
      if (!this.$refs.form.checkValidity()) {
        // remove alert on prod
        this.error = 'Invalid form'
        return
      }

      await this.$axios
        .$post('http://localhost:8000/api/user/login', {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data) {
            this.setToken(res.data.token)
            this.setUsername(res.data.username)
            this.$router.push('/')
          }
        })
        .catch((e) => {
          this.error = e
          console.log(this.error)
        })
    },
  },
}
</script>

<style></style>
