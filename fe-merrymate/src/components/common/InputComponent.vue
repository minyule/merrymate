<!-- InputComponent.vue -->
<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      class="input-box"
      @input="$emit('update:modelValue', inputValue)"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})

const inputValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal
})
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100px;
  margin-bottom: 0.5rem;
}

.input-label {
  margin-bottom: 0.25rem;
  /* font-weight: bold; */
}

.input-box {
  padding: 0.2rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
