<template>
  <div class="h-full w-full flex py-10 px-10 justify-center items-center">
    <div class="flex flex-col gap-3 w-1/2">
      <h1 class="text-center">New Order</h1>
      <form
        ref="form"
        class="block p-6 bg-white border border-gray-400 rounded-lg shadow"
      >
        <div class="mb-6 flex flex-col gap-5">
          <CInput v-model="name" v-bind="inputData[0]" />
          <CInput v-model="quantity" v-bind="inputData[1]" />
          <CInput v-model="price" v-bind="inputData[2]" />
        </div>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
          @click.prevent="submitForm"
        >
          Add Order
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import CInput from '~/components/universal/CInput.vue'

export default {
  name: 'NewOrderPage',
  components: {
    CInput,
  },
  data() {
    return {
      name: '',
      quantity: '',
      price: '',
      inputData: [
        {
          label: 'Name',
          type: 'text',
          placeholder: 'e.g. Apple',
          val: '',
          required: true,
        },
        {
          label: 'Quantity',
          type: 'number',
          placeholder: '0',
          val: 0,
          required: true,
        },
        {
          label: 'Price',
          type: 'number',
          placeholder: '0',
          val: 0,
          required: true,
          currency: 'Rp',
        },
      ],
    }
  },
  methods: {
    submitForm: async function () {
      if (!this.$refs.form.checkValidity()) {
        // remove alert on prod
        this.error = 'Invalid form'
        return
      }

      await this.$axios
        .$post(
          'http://localhost:8000/api/order',
          {
            data: {
              name: this.name,
              quantity: Number(this.quantity),
              price: Number(this.price),
            },
          },
          {
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              Authorization: 'Bearer ' + this.$store.state.auth.token,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            this.$router.push('/order')
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
