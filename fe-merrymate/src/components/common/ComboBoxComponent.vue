<template>
  <div class="combobox-wrapper">
    <label v-if="label" class="combobox-label">{{ label }}</label>
    <select
      v-model="selected"
      class="combobox-box"
      @change="$emit('update:modelValue', selected)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
})

const selected = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  selected.value = newVal
})
</script>

<style scoped>
.combobox-wrapper {
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-bottom: 0.5rem;
}

.combobox-label {
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.combobox-box {
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
