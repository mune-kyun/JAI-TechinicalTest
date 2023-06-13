<template>
  <div>
    <div
      v-if="mode === 'failed'"
      class="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700 absolute right-10 bottom-10 z-50"
      :class="{ hidden: !show && mode === 'failed' }"
      role="alert"
    >
      {{ text }} failed
    </div>
    <div
      v-if="mode === 'success'"
      class="mb-4 rounded-lg bg-success-100 px-6 py-5 text-base text-success-700 absolute right-10 bottom-10 z-50"
      :class="{ hidden: !show && mode === 'success' }"
      role="alert"
    >
      <p>{{ text }} success</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'success',
    },
    text: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
