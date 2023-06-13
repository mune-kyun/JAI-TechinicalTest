<template>
  <div class="w-[300px] bg-white border border-gray-400 rounded-lg shadow">
    <img class="rounded-t-lg" src="/placeholder.jpg" alt="item" />
    <div class="p-5 flex flex-col">
      <h5 class="mb-2 text-2xl tracking-tight text-gray-900">
        {{ name }}
      </h5>
      <p class="mb-3 text-black font-bold">Rp {{ price }}</p>
      <p class="mb-3 font-normal text-gray-500">Stok: {{ quantity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'quantity', 'price'],
}
</script>
