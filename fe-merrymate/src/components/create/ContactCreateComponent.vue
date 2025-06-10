<template>
  <div class="box">
    <div class="title">연락처 관리</div>

    <div class="contact-input-section">
      <h2>연락처 추가</h2>
      <label for="name">항목명:</label>
      <input type="text" id="name" v-model="newContact.name" placeholder="예: 신랑측 연락처, 비상 연락망" />

      <label for="type">종류:</label>
      <select id="type" v-model="newContact.type">
        <option value="phone">전화번호</option>
        <option value="email">이메일</option>
        <option value="other">기타</option>
      </select>

      <label for="value">연락처:</label>
      <input type="text" id="value" v-model="newContact.value" placeholder="연락처를 입력하세요" />

      <button @click="addContact" :disabled="!newContact.name.trim() || !newContact.value.trim()">추가</button>
    </div>

    <hr class="divider" />

    <div class="contact-list-section">
      <h2>등록된 연락처</h2>
      <ul v-if="contacts.length > 0">
        <li v-for="(contact, index) in contacts" :key="contact.id" :id="index" class="contact-item">
          <span class="contact-name">{{ contact.name }}</span>
          <span class="contact-type">{{ contact.typeLabel }}</span>
          <span class="contact-value">{{ contact.value }}</span>
          <button @click="removeContact(contact.id)">삭제</button>
        </li>
      </ul>
      <div v-else>등록된 연락처가 없습니다.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCreateComponent',
  data() {
    return {
      newContact: {
        name: '',
        type: 'phone',
        value: '',
      },
      contacts: [],
      nextContactId: 0,
    };
  },
  computed: {
    contactsWithTypeLabel() {
      return this.contacts.map(contact => ({
        ...contact,
        typeLabel: this.getTypeLabel(contact.type),
      }));
    },
  },
  methods: {
    getTypeLabel(type) {
      switch (type) {
        case 'phone':
          return '전화번호';
        case 'email':
          return '이메일';
        case 'other':
          return '기타';
        default:
          return '알 수 없음';
      }
    },
    addContact() {
      if (this.newContact.name.trim() && this.newContact.value.trim()) {
        this.contacts.push({
          id: this.nextContactId++,
          name: this.newContact.name,
          type: this.newContact.type,
          value: this.newContact.value,
        });
        this.newContact.name = '';
        this.newContact.value = ''; // 입력 필드 초기화
      } else {
        alert('항목명과 연락처를 모두 입력해주세요.');
      }
    },
    removeContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
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

.contact-input-section {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 20px;
}

.contact-input-section label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.contact-input-section input[type="text"],
.contact-input-section select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.contact-input-section button {
  padding: 10px 15px;
  background-color: #2196f3; /* 파란색 계열 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.contact-input-section button:hover:enabled {
  background-color: #1976d2;
}

.contact-input-section button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.divider {
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
}

.contact-list-section {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.contact-list-section h2 {
  margin-bottom: 10px;
}

.contact-list-section ul {
  list-style: none;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dotted #ccc;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-name {
  width: 150px;
  font-weight: bold;
  margin-right: 15px;
}

.contact-type {
  width: 100px;
  margin-right: 15px;
}

.contact-value {
  flex-grow: 1;
}

.contact-item button {
  background-color: #f44336; /* 빨간색 계열 */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
}

.contact-item button:hover {
  background-color: #d32f2f;
}
</style>