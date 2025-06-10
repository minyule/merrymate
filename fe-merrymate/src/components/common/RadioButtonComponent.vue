<template>
  <div class="radio-wrapper">
    <label v-if="label" class="radio-group-label">{{ label }}</label>
    <div class="radio-options">
      <label
        class="radio-option"
        v-for="option in options"
        :key="option.value"
      >
        <input
          type="radio"
          :value="option.value"
          v-model="selected"
          class="radio-button"
          @change="$emit('update:modelValue', selected)"
        />
        {{ option.text }}
      </label>
    </div>
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
.radio-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.radio-group-label {
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.radio-options {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.radio-option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-button {
  margin-right: 0.3rem;
}
</style>
