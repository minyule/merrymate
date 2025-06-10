<template>
  <div class="box mobile-input-component">
    <div class="title">신랑 신부 정보</div>
    <div class="subtitle">신랑</div>
    <div class="horizontal-container">
        <InputComponent
          v-model="groomLastName"
          placeholder="성"
        />
        <InputComponent
          v-model="groomFirstName"
          placeholder="이름"
        />
    </div>
    
    <div class="subtitle">신부</div>
    <div class="horizontal-container">
      <InputComponent
        v-model="brideLastName"
        placeholder="성"
      />
      <InputComponent
        v-model="brideFirstName"
        placeholder="이름"
      />
    </div>

    <CheckboxComponent v-model="isAppearLastname" label="성 표시 여부" />
  </div>
</template>

<script>
import InputComponent from '@/components/common/InputComponent.vue';
import CheckboxComponent from '@/components/common/CheckboxComponent.vue'

export default {
  name: 'MainPersonCreateComponent',
  components: {
    InputComponent,
    CheckboxComponent,
  },
  data() {
    return {
      groomLastName: "",
      groomFirstName: "",
      brideLastName: "",
      brideFirstName: "",

      isAppearLastname: true,
    }
  }
};
</script>
