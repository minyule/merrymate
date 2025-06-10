<template>
  <div class="box">
    <div class="title">영상 추가</div>
    <div>TODO: 파일 업로드 시 영상 길이는 최대 얼마까지 할 지 지정</div>
    <div class="upload-section">
      <h2>동영상 파일 업로드</h2>
      <input type="file" accept="video/*" @change="handleFileUpload" />
      <video v-if="localVideoUrl" :src="localVideoUrl" controls width="320" height="240"></video>
    </div>

    <div class="url-section">
      <h2>YouTube URL 입력</h2>
      <input type="text" v-model="youtubeUrl" placeholder="YouTube 동영상 URL을 입력하세요" />
      <div v-if="embeddedYoutubeUrl" class="video-container">
        <iframe
          width="560"
          height="315"
          :src="embeddedYoutubeUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <button @click="saveVideoSource" :disabled="!localVideoUrl && !youtubeUrl">저장</button>
    <div v-if="saveMessage">{{ saveMessage }}</div>
  </div>
</template>

<script>

export default {
  name: 'VideoCreateComponent',
  data() {
    return {
      localVideoFile: null,
      localVideoUrl: '',
      youtubeUrl: '',
      saveMessage: '',
    };
  },
  computed: {
    embeddedYoutubeUrl() {
      if (this.youtubeUrl && this.youtubeUrl.includes('youtube.com/watch?v=')) {
        const videoId = this.youtubeUrl.split('v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (this.youtubeUrl && this.youtubeUrl.includes('youtu.be/')) {
        const videoId = this.youtubeUrl.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return '';
    },
  },
  methods: {
    handleFileUpload(event) {
      this.localVideoFile = event.target.files[0];
      if (this.localVideoFile) {
        this.localVideoUrl = URL.createObjectURL(this.localVideoFile);
        // YouTube URL 초기화
        this.youtubeUrl = '';
      }
    },
    saveVideoSource() {
      if (this.localVideoUrl) {
        // TODO: 로컬 비디오 파일 저장/처리 로직 (서버 업로드 등)
        console.log('선택된 로컬 비디오 URL:', this.localVideoUrl);
        this.saveMessage = '로컬 동영상 정보가 저장되었습니다.';
      } else if (this.youtubeUrl) {
        // TODO: 유튜브 URL 저장 로직
        console.log('입력된 YouTube URL:', this.youtubeUrl);
        this.saveMessage = 'YouTube URL이 저장되었습니다.';
      } else {
        this.saveMessage = '동영상 파일을 업로드하거나 YouTube URL을 입력해주세요.';
      }
    },
  },
};
</script>

<style scoped>
.upload-section,
.url-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.video-container {
  margin-top: 10px;
}

input[type="file"] {
  margin-bottom: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.save-message {
  margin-top: 10px;
  font-weight: bold;
}
</style>