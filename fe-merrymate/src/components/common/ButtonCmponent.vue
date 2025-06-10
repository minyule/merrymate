<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue'

// 버튼 속성 정의
const props = defineProps({
  type: {
    type: String,
    default: 'primary' // 기본 버튼 타입은 primary
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 버튼 클릭 시 발생하는 이벤트
  onClick: {
    type: Function,
    default: () => {}
  }
})

// 버튼 클래스 계산
const buttonClass = computed(() => {
  return [
    'btn',
    `btn-${props.type}`,  // 버튼 타입에 따라 클래스를 적용
    { 'btn-disabled': props.disabled }  // disabled 속성에 따른 클래스 적용
  ]
})

// 버튼 클릭 시 이벤트 처리
const handleClick = (event) => {
  if (!props.disabled) {
    props.onClick(event)  // 부모로 전달된 클릭 이벤트 호출
  }
}
</script>

<style scoped>
/* 기본 버튼 스타일 */
.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

.btn:focus {
  outline: none;
}
</style>
