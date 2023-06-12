<template>
  <div class="h-full w-full flex py-10 px-10 justify-center">
    <div>
      <h1 class="underline text-2xl">All Orders</h1>
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
