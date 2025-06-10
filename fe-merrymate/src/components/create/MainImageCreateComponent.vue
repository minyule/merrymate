<template>
  <div class="box">
    <div class="title">메인 이미지 및 텍스트 설정</div>

    <div class="image-upload-section">
      <h2>메인 이미지 선택</h2>
      <input type="file" accept="image/*" @change="handleImageUpload" />
      <div v-if="previewImageUrl" class="image-preview">
        <img :src="previewImageUrl" alt="미리보기" style="max-width: 300px; max-height: 200px;" />
      </div>
    </div>

    <div class="text-input-section">
      <h2>메인 텍스트 입력</h2>
      <textarea v-model="mainText" placeholder="페이지 맨 앞에 보여줄 텍스트를 입력하세요." rows="3" cols="80"></textarea>
    </div>

    <div class="style-select-section">
      <h2>텍스트 스타일 선택</h2>
      <div class="style-options">
        <label v-for="(style, index) in textStyles" :key="index" class="style-option">
          <input type="radio" :value="style.class" v-model="selectedStyle" />
          <img :src="style.image" :alt="style.name" width="80" height="60" style="border: 1px solid #ccc; border-radius: 4px; margin-right: 5px; cursor: pointer;" />
          <span>{{ style.name }}</span>
        </label>
      </div>
    </div>

    <button @click="saveMainContent" :disabled="!previewImageUrl || !mainText">저장</button>
    <div v-if="saveMessage">{{ saveMessage }}</div>

    <div v-if="previewData" class="preview-section">
      <h2>미리보기</h2>
      <div class="main-preview" :class="selectedStyle" :style="previewImageStyle">
        <p>{{ mainText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import styleImage1 from '../../assets/images/style_image1.png';
import styleImage2 from '../../assets/images/style_image2.png';
import styleImage3 from '../../assets/images/style_image3.png';
import styleImage4 from '../../assets/images/style_image4.png';
import styleImage5 from '../../assets/images/style_image5.png';

export default {
  name: 'MainImageCreateComponent',
  data() {
    return {
      imageFile: null,
      previewImageUrl: '',
      mainText: '',
      selectedStyle: 'style1', // 기본 스타일 클래스
      saveMessage: '',
      previewData: null, // 저장된 이미지 및 텍스트 데이터 (미리보기용)
      textStyles: [
        { name: '스타일 1', class: 'style1', image: styleImage1 },
        { name: '스타일 2', class: 'style2', image: styleImage2 },
        { name: '스타일 3', class: 'style3', image: styleImage3 },
        { name: '스타일 4', class: 'style4', image: styleImage4 },
        { name: '스타일 5', class: 'style5', image: styleImage5 },
      ],
    };
  },
  computed: {
    previewImageStyle() {
      return this.previewImageUrl ? { backgroundImage: `url(${this.previewImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '20px' } : {};
    },
  },
  methods: {
    handleImageUpload(event) {
      this.imageFile = event.target.files[0];
      if (this.imageFile) {
        this.previewImageUrl = URL.createObjectURL(this.imageFile);
      } else {
        this.previewImageUrl = '';
      }
    },
    saveMainContent() {
      if (this.imageFile && this.mainText.trim() !== '') {
        this.previewData = {
          imageUrl: this.previewImageUrl,
          text: this.mainText,
          style: this.selectedStyle,
        };
        this.saveMessage = '메인 이미지와 텍스트가 저장되었습니다.';
        console.log('저장된 데이터:', this.previewData);
        // TODO: 실제 서버 또는 로컬 스토리지에 저장하는 로직 추가
      } else {
        this.saveMessage = '이미지와 텍스트를 모두 선택 및 입력해주세요.';
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

.image-upload-section,
.text-input-section,
.style-select-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.image-preview {
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}

textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.5;
}

.style-options {
  display: flex;
  gap: 10px;
  align-items: center;
}

.style-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.style-option input[type="radio"] {
  margin-bottom: 5px;
}

button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
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

.save-message {
  margin-top: 10px;
  font-weight: bold;
}

.preview-section {
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.main-preview {
  /* 기본 스타일 */
  border-radius: 8px;
}

.main-preview.style1 {
  font-size: 1.5em;
  font-weight: bold;
}

.main-preview.style2 {
  font-size: 2.5em;
  text-shadow: 2px 2px 4px #000000;
}

.main-preview.style3 {
  font-family: cursive;
  font-size: 2em;
}

.main-preview.style4 {
  color: #ff6b6b; /* Example color */
  font-style: italic;
}

.main-preview.style5 {
  background-color: rgba(0, 0, 0, 0.5); /* Example background */
  padding: 15px;
}
</style>