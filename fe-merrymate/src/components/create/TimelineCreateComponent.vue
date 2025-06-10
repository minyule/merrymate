<template>
  <div class="box">
    <div class="title">커플 타임라인 작성</div>

    <div class="timeline-input-section">
      <h2>추억 추가</h2>
      <label for="date">날짜:</label>
      <input type="date" id="date" v-model="newEvent.date" />

      <label for="event">내용:</label>
      <textarea id="event" v-model="newEvent.event" placeholder="어떤 일이 있었나요?" rows="3"></textarea>

      <button @click="addTimelineEvent" :disabled="!newEvent.date || !newEvent.event">추가</button>
    </div>

    <hr class="divider" />

    <div class="timeline-display-section">
      <h2>우리의 추억들</h2>
      <div v-if="timelineEvents.length > 0" class="timeline-container">
        <div v-for="(event, index) in sortedTimelineEvents" :key="index" class="timeline-item">
          <div class="timeline-circle"></div>
          <div class="timeline-content">
            <div class="date">{{ formatDate(event.date) }}</div>
            <div class="event-text">{{ event.event }}</div>
            <button @click="removeTimelineEvent(event.id)">삭제</button>
          </div>
          <div v-if="index < sortedTimelineEvents.length - 1" class="timeline-line"></div>
        </div>
      </div>
      <div v-else>아직 기록된 추억이 없습니다.</div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default {
  name: 'TimelineCreateComponent',
  data() {
    return {
      newEvent: {
        date: '',
        event: '',
      },
      timelineEvents: [], // 타임라인 이벤트들을 저장할 배열
      nextId: 0, // 각 이벤트에 고유 ID 부여
    };
  },
  computed: {
    sortedTimelineEvents() {
      return [...this.timelineEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  },
  methods: {
    addTimelineEvent() {
      if (this.newEvent.date && this.newEvent.event) {
        this.timelineEvents.push({ ...this.newEvent, id: this.nextId++ }); // 새 이벤트 객체 복사하여 추가하고 ID 부여
        this.newEvent.date = ''; // 입력 필드 초기화
        this.newEvent.event = '';
      } else {
        alert('날짜와 내용을 모두 입력해주세요.');
      }
    },
    removeTimelineEvent(id) {
      this.timelineEvents = this.timelineEvents.filter(event => event.id !== id);
    },
    formatDate(dateString) {
      if (!dateString) {
        return '';
      }
      const date = new Date(dateString);
      return format(date, 'yyyy년 MM월 dd일', { locale: ko });
    },
  },
};
</script>

<style scoped>
/* 이전 스타일 유지 */
.box {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.title {
  font-size: 1.5em;
  margin-bottom: 15px;
}

.divider {
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
}

.timeline-input-section {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 20px;
}

.timeline-input-section label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.timeline-input-section input[type="date"],
.timeline-input-section textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.timeline-input-section button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.timeline-input-section button:hover:enabled {
  background-color: #0056b3;
}

.timeline-input-section button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.timeline-display-section {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.timeline-display-section h2 {
  margin-bottom: 10px;
}

.timeline-container {
  position: relative;
  padding-left: 30px; /* 원과 선이 위치할 공간 확보 */
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-circle {
  position: absolute;
  top: 5px;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #007bff;
  border-radius: 50%;
  z-index: 1;
}

.timeline-line {
  position: absolute;
  top: 15px;
  left: 5px;
  width: 1px;
  height: calc(100% + 20px); /* 다음 원까지 연결 */
  background-color: #007bff;
  z-index: 0;
}

.timeline-content {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  padding-left: 20px; /* 원과의 간격 조정 */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.timeline-content .date {
  font-weight: bold;
  margin-right: 10px;
}

.timeline-content .event-text {
  flex-grow: 1;
}

.timeline-content button {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
}

.timeline-content button:hover {
  background-color: #d32f2f;
}
</style>