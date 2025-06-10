<template>
  <div class="box">
    <div class="title">하객 공지사항 작성</div>
    <textarea v-model="announcement" placeholder="하객들에게 전달할 공지사항을 입력하세요." rows="5" cols="80"></textarea>
    <button @click="saveAnnouncement">저장</button>
    <div v-if="savedAnnouncement">
      <h2>저장된 공지사항</h2>
      <p>{{ savedAnnouncement }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GestInformationCreateComponent',
  data() {
    return {
      announcement: '', // 입력된 공지사항
      savedAnnouncement: '', // 저장된 공지사항
    };
  },
  methods: {
    saveAnnouncement() {
      if (this.announcement.trim() !== '') {
        this.savedAnnouncement = this.announcement;
        alert('공지사항이 저장되었습니다.');
        // TODO: 실제 서버 또는 로컬 스토리지에 저장하는 로직 추가
      } else {
        alert('공지사항을 입력해주세요.');
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
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

h2 {
  margin-top: 20px;
}

p {
  white-space: pre-line; /* 줄바꿈 유지 */
  font-size: 16px;
  line-height: 1.5;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #f9f9f9;
}
</style>