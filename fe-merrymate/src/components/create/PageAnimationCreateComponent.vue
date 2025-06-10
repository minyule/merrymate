<template>
  <div class="box">
    <div class="title">페이지 시작 애니메이션 선택</div>

    <div class="animation-select-section">
      <h2>애니메이션 스타일 선택</h2>
      <div class="animation-options">
        <label v-for="(style, index) in animationStyles" :key="index" class="animation-option">
          <input type="radio" :value="style.class" v-model="selectedAnimation" />
          <img :src="style.image" :alt="style.name" width="80" height="60" style="border: 1px solid #ccc; border-radius: 4px; margin-right: 5px; cursor: pointer;" />
          <span>{{ style.name }}</span>
        </label>
      </div>
    </div>

    <div v-if="selectedAnimation" class="preview-section">
      <h2>선택된 애니메이션 미리보기</h2>
      <div class="animation-preview" :class="selectedAnimation">
        <div class="preview-content">애니메이션 효과 미리보기</div>
      </div>
      <p class="description">{{ currentAnimationDescription }}</p>
    </div>

    <button @click="saveAnimationChoice" :disabled="!selectedAnimation">선택 저장</button>
    <div v-if="saveMessage">{{ saveMessage }}</div>
  </div>
</template>

<script>
import animationImage1 from '@/assets/images/style_image1.png';
import animationImage2 from '@/assets/images/style_image2.png';
import animationImage3 from '@/assets/images/style_image3.png';
import animationImage4 from '@/assets/images/style_image4.png';
import animationImage5 from '@/assets/images/style_image5.png';

export default {
  name: 'PageAnimationCreateComponent',
  data() {
    return {
      selectedAnimation: null, // 선택된 애니메이션 스타일 클래스
      saveMessage: '',
      animationStyles: [
        { name: '페이드 인', class: 'fade-in', image: animationImage1, description: '화면이 서서히 밝아지며 나타나는 효과입니다.' },
        { name: '슬라이드 다운', class: 'slide-down', image: animationImage2, description: '위에서 아래로 부드럽게 미끄러지듯 나타나는 효과입니다.' },
        { name: '스케일 업', class: 'scale-up', image: animationImage3, description: '중심에서부터 크기가 커지며 나타나는 효과입니다.' },
        { name: '회전하며 등장', class: 'rotate-in', image: animationImage4, description: '회전하면서 부드럽게 나타나는 효과입니다.' },
        { name: '블러 효과', class: 'blur-in', image: animationImage5, description: '흐릿한 상태에서 선명해지며 나타나는 효과입니다.' },
      ],
    };
  },
  computed: {
    currentAnimationDescription() {
      const selectedStyle = this.animationStyles.find(style => style.class === this.selectedAnimation);
      return selectedStyle ? selectedStyle.description : '';
    },
  },
  methods: {
    saveAnimationChoice() {
      if (this.selectedAnimation) {
        this.saveMessage = `선택된 애니메이션 스타일: ${this.selectedAnimation} (저장 완료)`;
        console.log('선택된 애니메이션 스타일:', this.selectedAnimation);
        // TODO: 선택된 애니메이션 스타일을 저장하는 로직 (서버 또는 로컬 스토리지) 추가
      } else {
        this.saveMessage = '애니메이션 스타일을 선택해주세요.';
      }
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

.animation-select-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.animation-options {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.animation-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.animation-option input[type="radio"] {
  margin-bottom: 5px;
}

.preview-section {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.animation-preview {
  width: 100px;
  height: 80px;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  margin-bottom: 10px;
}

.preview-content {
  font-size: 0.8em;
  color: #555;
}

.description {
  font-size: 0.9em;
  color: #777;
}

button {
  padding: 10px 15px;
  background-color: #00bcd4; /* Teal 계열 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover:enabled {
  background-color: #0097a7;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.save-message {
  margin-top: 10px;
  font-weight: bold;
}

/* 애니메이션 스타일 정의 (간단한 예시) */
.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}

.slide-down {
  animation: slideDown 0.5s ease-out forwards;
}

.scale-up {
  animation: scaleUp 0.3s ease-out forwards;
}

.rotate-in {
  animation: rotateIn 0.7s ease-in-out forwards;
}

.blur-in {
  animation: blurIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes scaleUp {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes rotateIn {
  0% { transform: rotate(-30deg); opacity: 0; }
  100% { transform: rotate(0); opacity: 1; }
}

@keyframes blurIn {
  0% { filter: blur(5px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}
</style>