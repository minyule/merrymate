<template>
  <div class="checkbox-wrapper">
    <label class="checkbox-label">
      <input
        type="checkbox"
        v-model="checked"
        class="checkbox-box"
        @change="$emit('update:modelValue', checked)"
      />
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
})

const checked = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  checked.value = newVal
})
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
  font-size: 0.8em;
}

.checkbox-box {
  margin-right: 0.5rem;
  margin-left: 0.1rem;
  width: 13px;
  height: 13px;
  accent-color: #088888;
}
</style>
