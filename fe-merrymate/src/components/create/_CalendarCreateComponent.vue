<template>
  <div>
    <VueDatePicker v-model="date" time-picker-inline />
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'CalendarCreateComponent',
  components: {
    VueDatePicker,
  },
  data() {
    return {
      date: "2025-05-11 10:11",
    }
  }
};
</script>
