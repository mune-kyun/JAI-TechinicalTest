<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900">{{
      label
    }}</label>
    <div class="flex items-center gap-2">
      <label v-if="currency" class="text-sm">{{ currency }}</label>
      <input
        :value="value"
        :placeholder="placeholder"
        :required="required"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        :type="type"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: true,
    },
    currency: {
      type: String,
      default: '',
    },
  },
}
</script>
