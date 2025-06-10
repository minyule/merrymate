<template>
  <div class="box">
    <div class="title">예식 정보</div>
    <VueDatePicker v-model="weddingDate" time-picker-inline />
    <InputComponent
      label="예식장 주소"
      v-model="hallAddress"
    />
    <InputComponent
      label="홀 정보"
      v-model="hallDetail"
    />
    <InputComponent
      label="추가 정보"
      v-model="hallDescription"
    />
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import InputComponent from '../common/InputComponent.vue';

export default {
  name: 'HallDetailCreateComponent',
  components: {
    VueDatePicker,
    InputComponent,
  },
  data() {
    return {
      weddingDate: new Date(),

      hallAddress: "",
      hallDetail: "",
      hallDescription: "",
    }
  }
};
</script>
