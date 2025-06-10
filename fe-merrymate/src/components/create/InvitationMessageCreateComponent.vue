<template>
  <div class="box">
    <div class="title">초대 메시지 작성</div>
    <textarea v-model="message" placeholder="하객들에게 전달할 초대 메시지를 입력하세요." rows="10" cols="80"></textarea>
    <button @click="saveMessage">저장</button>
    <div v-if="savedMessage">
      <h2>저장된 초대 메시지</h2>
      <p>{{ savedMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvitationMessageCreateComponent',
  data() {
    return {
      message: '', // 입력할 초대 메시지
      savedMessage: '', // 저장된 초대 메시지
    };
  },
  methods: {
    saveMessage() {
      if (this.message.trim() !== '') {
        this.savedMessage = this.message;
        alert('초대 메시지가 저장되었습니다.');
        // TODO: 실제 서버 또는 로컬 스토리지에 저장하는 로직 추가
      } else {
        alert('초대 메시지를 입력해주세요.');
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
  background-color: #28a745; /* 녹색 계열로 변경 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #1e7e34;
}

h2 {
  margin-top: 20px;
}

p {
  white-space: pre-line; /* 줄바꿈 유지 */
  font-size: 16px;
  line-height: 1.8; /* 줄 간격 약간 넓힘 */
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f9fa; /* 밝은 회색 배경 */
}
</style>