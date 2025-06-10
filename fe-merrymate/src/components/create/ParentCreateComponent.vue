<template>
  <div class="box mobile-input-component">
    <div class="title">혼주 정보</div>
    <div class="subtitle">신랑측</div>
    <div class="subtitle">혼주 1</div>
    <div class="horizontal-container">
        <InputComponent
          v-model="parent1LastName"
          placeholder="성"
        />
        <InputComponent
          v-model="parent1FirstName"
          placeholder="이름"
        />
    </div>
    <CheckboxComponent v-model="isDead1" label="고인 여부" />

    <div class="subtitle">혼주 2</div>
    <div class="horizontal-container">
      <InputComponent
        v-model="parent2LastName"
        placeholder="성"
      />
      <InputComponent
        v-model="parent2FirstName"
        placeholder="이름"
      />
    </div>
    <CheckboxComponent v-model="isDead2" label="고인 여부" />
    
    <div class="subtitle">신부측</div>
    <div class="subtitle">혼주 1</div>
    <div class="horizontal-container">
        <InputComponent
          v-model="parent3LastName"
          placeholder="성"
        />
        <InputComponent
          v-model="parent3FirstName"
          placeholder="이름"
        />
    </div>
    <CheckboxComponent v-model="isDead3" label="고인 여부" />

    <div class="subtitle">혼주 2</div>
    <div class="horizontal-container">
      <InputComponent
        v-model="parent4LastName"
        placeholder="성"
      />
      <InputComponent
        v-model="parent4FirstName"
        placeholder="이름"
      />
    </div>
    <CheckboxComponent v-model="isDead4" label="고인 여부" />
    
    <!-- TODO: disabled -->
    <RadioButtonComponent
      v-model="selectedDeadIcon"
      label="고인 표시"
      :options="listDeadDisplay"
      />
    <!-- <ComboBoxComponent
      v-model="deadSelect"
      label="국가 선택"
      :options="deadAppear"
    /> -->
  </div>
</template>

<script>
import InputComponent from '@/components/common/InputComponent.vue';
import CheckboxComponent from '@/components/common/CheckboxComponent.vue';
import RadioButtonComponent from '@/components/common/RadioButtonComponent.vue';

export default {
  name: 'ParentCreateComponent',
  components: {
    InputComponent,
    CheckboxComponent,
    RadioButtonComponent,
  },
  data() {
    return {
      parent1LastName: "",
      parent1FirstName: "",
      parent2LastName: "",
      parent2FirstName: "",
      parent3LastName: "",
      parent3FirstName: "",
      parent4LastName: "",
      parent4FirstName: "",

      isDead1: false,
      isDead2: false,
      isDead3: false,
      isDead4: false,

      listDeadDisplay: [
        { value: '1', text: '없음' },
        { value: '2', text: '한자 (故)' },
        { value: '3', text: '국화1' },
        { value: '3', text: '국화2' },
      ],
      selectedDeadIcon: "1",
    }
  }
};
</script>
