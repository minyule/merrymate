<template>
  <div class="box">
    <div class="title">첫 인사 메시지 작성</div>
    <textarea v-model="firstGreeting" placeholder="페이지 맨 처음에 보여줄 첫 인사 메시지를 입력하세요." rows="4" cols="80"></textarea>
    <button @click="saveFirstGreeting">저장</button>
    <div v-if="savedFirstGreeting">
      <h2>저장된 첫 인사 메시지</h2>
      <p>{{ savedFirstGreeting }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstGreetingCreateComponent',
  data() {
    return {
      firstGreeting: '', // 입력할 첫 인사 메시지
      savedFirstGreeting: '', // 저장된 첫 인사 메시지
    };
  },
  methods: {
    saveFirstGreeting() {
      if (this.firstGreeting.trim() !== '') {
        this.savedFirstGreeting = this.firstGreeting;
        alert('첫 인사 메시지가 저장되었습니다.');
        // TODO: 실제 서버 또는 로컬 스토리지에 저장하는 로직 추가
      } else {
        alert('첫 인사 메시지를 입력해주세요.');
      }
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.5;
}

button {
  padding: 10px 15px;
  background-color: #6c757d; /* 회색 계열 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #545b62;
}

h2 {
  margin-top: 20px;
}

p {
  white-space: pre-line; /* 줄바꿈 유지 */
  font-size: 16px;
  line-height: 1.6;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f9fa; /* 밝은 회색 배경 */
}
</style>