<template>
  <div class="box">
    <div class="title">예식 시간 카운트다운</div>
    <label for="wedding-time">예식 시간 설정:</label>
    <VueDatePicker v-model="weddingTime" />
    <div v-if="remainingTime">
      <h2>남은 시간</h2>
      <p>{{ remainingTime.days }}일 {{ remainingTime.hours }}시간 {{ remainingTime.minutes }}분 {{ remainingTime.seconds }}초 남았습니다.</p>
    </div>
    <div v-else-if="weddingTime">
      <p>예식 시간을 기다리는 중입니다...</p>
    </div>
    <div v-else>
      <p>예식 시간을 설정해주세요.</p>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'RemainingTimeCreateComponent',
  components: {
    VueDatePicker,
  },
  data() {
    return {
      weddingTime: null, // 사용자가 선택할 예식 시간
      intervalId: null,
      now: new Date(),
    };
  },
  computed: {
    remainingTime() {
      if (!this.weddingTime) {
        return null;
      }

      const weddingDateTime = new Date(this.weddingTime).getTime();
      const nowTime = this.now.getTime();
      const difference = weddingDateTime - nowTime;

      if (difference <= 0) {
        clearInterval(this.intervalId);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const seconds = Math.floor(difference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      return {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      };
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
};
</script>