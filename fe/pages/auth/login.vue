<template>
  <div class="h-full w-full flex pt-10 justify-center">
    <div class="flex flex-col gap-4 w-full justify-center items-center">
      <h1 class="font-bold text-lg text-blue-700">Login</h1>
      <c-alert-vue :show="showAlert" :text="'Login '" :mode="alertMode" />
      <form
        ref="form"
        class="block p-6 bg-white border border-gray-400 rounded-lg shadow w-1/2"
      >
        <div class="mb-6 flex flex-col gap-3">
          <CInput v-model="username" v-bind="inputData[0]" />
          <CInput v-model="password" v-bind="inputData[1]" />
        </div>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          @click.prevent="submitForm"
        >
          Login
        </button>
        <div class="flex text-sm mt-6">
          <span
            >Don't have an account?
            <router-link
              :to="{ path: '/auth/register' }"
              class="text-blue-600 hover:text-blue-700"
              >Register</router-link
            ></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CAlertVue from '~/components/universal/CAlert.vue'
import CInput from '~/components/universal/CInput.vue'

export default {
  name: 'LoginPage',
  components: {
    CInput,
    CAlertVue,
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
      showAlert: false,
      alertMode: 'success',
    }
  },
  methods: {
    ...mapActions({
      setToken: 'auth/setToken',
      setUsername: 'auth/setUsername',
    }),
    submitForm: async function () {
      let isSuccess = false

      if (!this.$refs.form.checkValidity()) {
        // remove alert on prod
        this.error = 'Invalid form'
        return
      }

      await this.$axios
        .$post(process.env.BE + '/user/login', {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data) {
            isSuccess = true
            this.alertMode = 'success'
            this.setToken(res.data.token)
            this.setUsername(res.data.username)
          } else {
            this.alertMode = 'failed'
          }
        })
        .catch((e) => {
          this.error = e
          console.log(this.error)
          this.alertMode = 'failed'
        })

      this.showAlert = true

      setTimeout(() => {
        this.showAlert = false
        if (isSuccess) {
          this.$router.push('/')
        }
      }, 2000)
    },
  },
}
</script>

<style></style>
