<template>
  <div class="h-full w-full flex py-10 px-10 justify-center">
    <div>
      <div class="flex items-center justify-between gap-4">
        <h1 class="underline text-2xl">All Orders</h1>
        <nuxt-link
          to="/order/new"
          class="bg-white p-5 pl-3 rounded-lg border border-gray-400 drop-shadow-lg flex justify-center items-center gap-2 text-black hover:text-white text-lg hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
        >
          <img src="/plus.png" class="w-8 h-auto" alt="Flowbite Logo" />
          <p>New Order</p>
        </nuxt-link>
      </div>
      <div class="flex flex-wrap gap-4 mt-4">
        <CCard v-for="order in orders" v-bind="order" :key="order.id" />
      </div>
    </div>
  </div>
</template>

<script>
import CCard from '~/components/order/CCard.vue'

export default {
  name: 'OrderPage',
  components: {
    CCard,
  },
  data() {
    return {
      orders: [],
    }
  },
  async beforeMount() {
    await this.$axios
      .$get('http://localhost:8000/api/order', {
        headers: {
          Authorization: `Bearer ${this.$store.state.auth.token}`,
        },
      })
      .then((res) => {
        if (res.data) {
          this.orders = res.data.map((order) => {
            return {
              id: order.id,
              name: order.productName,
              quantity: order.productQuantity,
              price: order.productPrice,
            }
          })
        }
      })
      .catch((e) => {
        this.error = e
        console.log(this.error)
      })
  },
}
</script>

<style></style>
