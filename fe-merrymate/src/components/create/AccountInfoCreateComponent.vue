<template>
  <div class="box">
    <div class="title">계좌 정보 입력</div>
    <div class="account-section">
      <div class="groom-side">
        <h2>신랑 측 계좌</h2>
        <div v-for="(account, index) in groomAccounts" :key="'groom-' + index" class="account-item">
          <input type="text" v-model="account.name" placeholder="예: 신랑 아버지" />
          <input type="text" v-model="account.number" placeholder="계좌번호 입력" />
          <button @click="copyToClipboard(account.number)">복사</button>
          <button @click="removeGroomAccount(index)">삭제</button>
        </div>
        <button @click="addGroomAccount">신랑 측 계좌 추가</button>
      </div>

      <div class="bride-side">
        <h2>신부 측 계좌</h2>
        <div v-for="(account, index) in brideAccounts" :key="'bride-' + index" class="account-item">
          <input type="text" v-model="account.name" placeholder="예: 신부 어머니" />
          <input type="text" v-model="account.number" placeholder="계좌번호 입력" />
          <button @click="copyToClipboard(account.number)">복사</button>
          <button @click="removeBrideAccount(index)">삭제</button>
        </div>
        <button @click="addBrideAccount">신부 측 계좌 추가</button>
      </div>
    </div>

    <div v-if="copySuccessMessage" class="copy-success">
      {{ copySuccessMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountInfoCreateComponent',
  data() {
    return {
      groomAccounts: [{ name: '', number: '' }], // 신랑 측 계좌 목록 (초기 항목 1개)
      brideAccounts: [{ name: '', number: '' }], // 신부 측 계좌 목록 (초기 항목 1개)
      copySuccessMessage: '',
    };
  },
  methods: {
    addGroomAccount() {
      this.groomAccounts.push({ name: '', number: '' });
    },
    removeGroomAccount(index) {
      this.groomAccounts.splice(index, 1);
    },
    addBrideAccount() {
      this.brideAccounts.push({ name: '', number: '' });
    },
    removeBrideAccount(index) {
      this.brideAccounts.splice(index, 1);
    },
    copyToClipboard(text) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
          .then(() => {
            this.copySuccessMessage = '계좌번호가 복사되었습니다.';
            setTimeout(() => {
              this.copySuccessMessage = '';
            }, 1500); // 1.5초 후 메시지 사라짐
          })
          .catch((err) => {
            console.error('클립보드 복사 실패:', err);
            alert('클립보드 복사에 실패했습니다.');
          });
      } else {
        // Clipboard API를 지원하지 않는 경우 (예: 일부 구형 브라우저) 대체 방법 제공
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        this.copySuccessMessage = '계좌번호가 복사되었습니다.';
        setTimeout(() => {
          this.copySuccessMessage = '';
        }, 1500);
      }
    },
  },
};
</script>

<style scoped>
.account-section {
  display: flex;
  gap: 20px;
}

.groom-side,
.bride-side {
  flex: 1;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.account-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
}

.account-item input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.account-item button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.account-item button:last-child {
  background-color: #f44336;
}

.account-item button:hover {
  background-color: #0056b3;
}

.account-item button:last-child:hover {
  background-color: #d32f2f;
}

.copy-success {
  margin-top: 20px;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
}
</style>