<template>
  <div class="box">
    <div class="title">만나온 시간</div>
    <VueDatePicker v-model="startDate" time-picker-inline />
    <p>사귄 날짜: {{ formatDate(startDate) }}</p>
    <p>만난 지 {{ timeSince }}</p>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default {
  name: 'SinceTimeCreateComponent',
  components: {
    VueDatePicker,
  },
  data() {
    return {
      startDate: new Date('2025-05-11T10:11:00'), // Date 객체로 초기화
      intervalId: null,
      now: new Date(), // 현재 시간을 저장할 데이터 속성
    };
  },
  computed: {
    timeSince() {
      if (!this.startDate) {
        return '날짜를 선택해주세요.';
      }

      const difference = this.now.getTime() - this.startDate.getTime();

      const seconds = Math.floor(difference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const remainingHours = hours % 24;
      const remainingMinutes = minutes % 60;
      const remainingSeconds = seconds % 60;

      let displayText = '';
      if (days > 0) {
        displayText += `${days}일 `;
      }
      if (remainingHours >= 0) {
        displayText += `${remainingHours}시간 `;
      }
      if (remainingMinutes >= 0) {
        displayText += `${remainingMinutes}분 `;
      }
      displayText += `${remainingSeconds}초`;

      return displayText;
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      // 화면이 활성화되어 있을 때만 업데이트
      if (document.visibilityState === 'visible') {
        this.now = new Date(); // 1초마다 현재 시간 업데이트
      }
    }, 1000); // 1초마다 실행
  },
  unmounted() {
    clearInterval(this.intervalId); // 컴포넌트가 제거될 때 인터벌 정리
  },
  methods: {
    formatDate(date) {
      if (!date) {
        return '';
      }
      return format(date, 'yyyy년 MM월 dd일 HH:mm:ss', { locale: ko });
    },
  },
};
</script>