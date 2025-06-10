<template>
  <div class="box">
    <div class="title">갤러리 이미지 추가</div>

    <div class="image-upload-section">
      <h2>갤러리 이미지 선택</h2>
      <input type="file" accept="image/*" multiple @change="handleImageUpload" />
    </div>

    <div v-if="uploadedImages.length > 0" class="uploaded-images-list">
      <h2>업로드된 이미지 목록</h2>
      <div class="image-item" v-for="(image, index) in uploadedImages" :key="image.id" :id="index">
        <img :src="image.previewUrl" alt="업로드된 이미지" style="max-width: 100px; max-height: 80px; margin-right: 5px; border: 1px solid #ccc; border-radius: 4px;" />
        <button @click="removeUploadedImage(image.id)">삭제</button>
      </div>
    </div>
    <div v-else>선택된 이미지가 없습니다.</div>

    <div class="style-select-section">
      <h2>갤러리 스타일 선택</h2>
      <div class="style-options">
        <label v-for="(style, index) in galleryStyles" :key="index" class="style-option">
          <input type="radio" :value="style.class" v-model="selectedGalleryStyle" />
          <img :src="style.image" :alt="style.name" width="80" height="60" style="border: 1px solid #ccc; border-radius: 4px; margin-right: 5px; cursor: pointer;" />
          <span>{{ style.name }}</span>
        </label>
      </div>
    </div>

    <button @click="saveGalleryImages" :disabled="uploadedImages.length === 0">저장</button>
    <div v-if="saveMessage">{{ saveMessage }}</div>

    <div v-if="savedImages.length > 0" class="saved-gallery">
      <h2>저장된 갤러리 (미리보기)</h2>
      <div class="saved-image-grid" :class="selectedGalleryStyle">
        <img v-for="(url, index) in savedImages" :key="index" :src="url" alt="저장된 이미지" />
      </div>
    </div>
  </div>
</template>

<script>
import styleImage1 from '../../assets/images/style_image1.png'; // 실제 이미지 경로
import styleImage2 from '../../assets/images/style_image2.png'; // 실제 이미지 경로
import styleImage3 from '../../assets/images/style_image3.png'; // 실제 이미지 경로

export default {
  name: 'GalleryCreateComponent',
  data() {
    return {
      uploadedImages: [], // 업로드된 이미지 목록 (각각 id, file, previewUrl 가짐)
      selectedGalleryStyle: 'grid-style1', // 기본 스타일 클래스
      saveMessage: '',
      savedImages: [], // 저장된 이미지 URL 목록
      nextImageId: 0,
      galleryStyles: [
        { name: '스타일 1 (격자형)', class: 'grid-style1', image: styleImage1 },
        { name: '스타일 2 (가로 스크롤)', class: 'scroll-style2', image: styleImage2 },
        { name: '스타일 3 (모자이크형)', class: 'mosaic-style3', image: styleImage3 },
      ],
    };
  },
  methods: {
    handleImageUpload(event) {
      const files = Array.from(event.target.files);
      files.forEach(file => {
        const previewUrl = URL.createObjectURL(file);
        this.uploadedImages.push({
          id: this.nextImageId++,
          file: file,
          previewUrl: previewUrl,
        });
      });
    },
    removeUploadedImage(id) {
      this.uploadedImages = this.uploadedImages.filter(image => image.id !== id);
    },
    saveGalleryImages() {
      if (this.uploadedImages.length > 0) {
        this.savedImages = this.uploadedImages.map(image => image.previewUrl);
        this.saveMessage = '갤러리 이미지가 저장되었습니다.';
        console.log('저장할 이미지 파일 목록:', this.uploadedImages.map(img => img.file));
        console.log('선택된 갤러리 스타일:', this.selectedGalleryStyle);
        // TODO: 실제 서버 또는 로컬 스토리지에 이미지 파일 목록 및 스타일 정보 저장 로직 추가
        // this.uploadedImages의 file 속성을 FormData에 담아 서버로 전송할 수 있습니다.
      } else {
        this.saveMessage = '선택된 이미지가 없습니다.';
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
.style-select-section,
.uploaded-images-list {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.uploaded-images-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}

.image-item img {
  margin-bottom: 5px;
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
  background-color: #673ab7; /* 보라색 계열 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover:enabled {
  background-color: #512da8;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.save-message {
  margin-top: 10px;
  font-weight: bold;
}

.saved-gallery {
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.saved-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 5px;
}

.saved-image-grid.scroll-style2 {
  display: flex;
  overflow-x: auto;
  gap: 10px;
}

.saved-image-grid.mosaic-style3 {
  /* 모자이크 스타일은 CSS로 복잡하게 구현해야 합니다. 예시 생략 */
}

.saved-image-grid img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid #eee;
}

.saved-image-grid.scroll-style2 img {
  width: auto;
  height: 80px; /* 예시 높이 */
}
</style>