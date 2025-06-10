<template>
  <div class="box">
    <div class="title">방명록 작성</div>

    <div class="message-form">
      <label for="name">이름 (선택 사항):</label>
      <input type="text" id="name" v-model="newMessage.name" placeholder="이름을 입력해주세요 (익명 가능)" />

      <label>익명으로 작성:</label>
      <input type="checkbox" v-model="newMessage.isAnonymous" />

      <label for="message">방명록 내용:</label>
      <textarea id="message" v-model="newMessage.message" placeholder="축하 메시지나 덕담을 남겨주세요." rows="5"></textarea>

      <button @click="addMessage" :disabled="!newMessage.message.trim()">작성 완료</button>
    </div>

    <hr class="divider" />

    <div class="message-board">
      <h2>방명록</h2>
      <ul v-if="messages.length > 0">
        <li v-for="(msg, index) in messages" :key="index" class="message-item">
          <div class="message-header">
            <span class="author">{{ msg.isAnonymous ? '익명' : (msg.name || '익명') }}</span>
            <span class="date">{{ formatDate(msg.timestamp) }}</span>
          </div>
          <div class="message-content">{{ msg.message }}</div>
        </li>
      </ul>
      <div v-else>아직 작성된 방명록이 없습니다.</div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default {
  name: 'MessageBoardCreateComponent',
  data() {
    return {
      newMessage: {
        name: '',
        isAnonymous: false,
        message: '',
      },
      messages: [], // 방명록 메시지 목록
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage.message.trim()) {
        this.messages.unshift({ // 새 메시지를 배열 맨 앞에 추가하여 최신 글이 먼저 보이도록 함
          name: this.newMessage.name,
          isAnonymous: this.newMessage.isAnonymous,
          message: this.newMessage.message,
          timestamp: new Date().toISOString(),
        });
        // 입력 필드 초기화
        this.newMessage.name = '';
        this.newMessage.isAnonymous = false;
        this.newMessage.message = '';
      } else {
        alert('방명록 내용을 입력해주세요.');
      }
    },
    formatDate(dateString) {
      if (!dateString) {
        return '';
      }
      const date = new Date(dateString);
      return format(date, 'yyyy년 MM월 dd일 HH:mm', { locale: ko });
    },
  },
};
</script>

<style scoped>
.box {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.title {
  font-size: 1.5em;
  margin-bottom: 15px;
}

.message-form {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 20px;
}

.message-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.message-form input[type="text"],
.message-form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.message-form input[type="checkbox"] {
  margin-right: 5px;
  vertical-align: middle;
}

.message-form label:not(:first-child) {
  margin-top: 10px;
}

.message-form button {
  padding: 10px 15px;
  background-color: #4caf50; /* 녹색 계열 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
}

.message-form button:hover:enabled {
  background-color: #43a047;
}

.message-form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.divider {
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
}

.message-board {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.message-board h2 {
  margin-bottom: 10px;
}

.message-board ul {
  list-style: none;
  padding: 0;
}

.message-item {
  padding: 10px 0;
  border-bottom: 1px dotted #ccc;
}

.message-item:last-child {
  border-bottom: none;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 0.9em;
  color: #777;
}

.message-header .author {
  font-weight: bold;
}

.message-content {
  white-space: pre-line; /* 줄바꿈 유지 */
}
</style>