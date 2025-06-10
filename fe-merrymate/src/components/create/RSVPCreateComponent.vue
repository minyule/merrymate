<template>
  <div class="box">
    <h1 class="title">참석 여부 회신</h1>
    <div class="rsvp-form">
      <label for="name">이름:</label>
      <input type="text" id="name" v-model="name" placeholder="이름을 입력해주세요" />

      <label>참석 여부:</label>
      <div class="radio-group">
        <input type="radio" id="attend" value="attend" v-model="attendance" />
        <label for="attend">참석</label>

        <input type="radio" id="not-attend" value="not-attend" v-model="attendance" />
        <label for="not-attend">불참</label>
      </div>

      <label for="guests">동반인 수 (본인 포함):</label>
      <select id="guests" v-model="guests">
        <option v-for="n in 10" :key="n" :value="n">{{ n }}명</option>
      </select>

      <label for="message">전달할 메시지 (선택 사항):</label>
      <textarea id="message" v-model="message" placeholder="축하 메시지 또는 기타 전달할 내용을 입력해주세요"></textarea>

      <button @click="submitRsvp" :disabled="!name || !attendance">회신 제출</button>

      <div v-if="submissionResult" class="result-message" :class="{ 'success': submissionResult.success, 'error': !submissionResult.success }">
        {{ submissionResult.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RSVPCreateComponent',
  data() {
    return {
      name: '',
      attendance: '', // 'attend' 또는 'not-attend'
      guests: 1,
      message: '',
      submissionResult: null, // { success: boolean, message: string }
    };
  },
  methods: {
    submitRsvp() {
      if (!this.name) {
        this.submissionResult = { success: false, message: '이름을 입력해주세요.' };
        return;
      }
      if (!this.attendance) {
        this.submissionResult = { success: false, message: '참석 여부를 선택해주세요.' };
        return;
      }

      // TODO: 실제 서버로 데이터를 전송하는 로직 구현
      const rsvpData = {
        name: this.name,
        attendance: this.attendance,
        guests: this.guests,
        message: this.message,
        rsvpDate: new Date().toISOString(), // 회신 시간 기록
      };

      console.log('회신 데이터:', rsvpData);

      // 가상의 성공/실패 처리
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        this.submissionResult = {
          success: isSuccess,
          message: isSuccess ? '참석 여부가 성공적으로 제출되었습니다. 감사합니다!' : '회신 제출에 실패했습니다. 잠시 후 다시 시도해주세요.',
        };
        if (isSuccess) {
          // 폼 초기화 (선택 사항)
          this.name = '';
          this.attendance = '';
          this.guests = 1;
          this.message = '';
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.rsvp-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.radio-group {
  margin-bottom: 15px;
}

.radio-group input[type="radio"] {
  margin-right: 5px;
}

button {
  background-color: #28a745;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover:enabled {
  background-color: #1e7e34;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.result-message {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
}

.result-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.result-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>