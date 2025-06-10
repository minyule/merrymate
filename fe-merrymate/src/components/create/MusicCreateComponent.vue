<template>
  <div class="music-upload-container">
    <div class="file-input-wrapper">
      <label for="soundFileInput" class="file-input-label">
        오디오 파일 선택
      </label>
      <input
        type="file"
        id="soundFileInput"
        class="soundFileInput"
        accept="audio/*"
        @change="onAudioSelected"
        ref="fileInput"
      />
      <span v-if="selectedFileName" class="file-name-display">
        선택된 파일: {{ selectedFileName }}
      </span>
    </div>

    <audio class="player" controls ref="player" v-show="audioSrc" @volumechange="onVolumeChanged">
    </audio>

    <div v-if="audioSrc" class="volume-control">
      <label for="volumeSlider">볼륨:</label>
      <input
        type="range"
        id="volumeSlider"
        min="0"
        max="1"
        step="0.01"
        v-model="volume"
      />
      <span>{{ Math.round(volume * 100) }}%</span>
    </div>

    <p v-if="!audioSrc && hasAttemptedUpload" class="no-audio-message">
      오디오 파일을 선택해주세요.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MusicCreateComponent',
  data() {
    return {
      audioSrc: null, // 오디오 URL을 저장할 데이터 속성
      selectedFileName: '', // 선택된 파일 이름을 저장할 데이터 속성
      hasAttemptedUpload: false, // 사용자가 업로드를 시도했는지 여부
      volume: 1, // 초기 볼륨 값 (0.0 ~ 1.0)
      currentVolume: 1, // 현재 볼륨 값
    };
  },
  watch: {
    volume(newVolume) {
      if (this.$refs.player) {
        this.$refs.player.volume = newVolume;
        this.currentVolume = newVolume;
      }
    },
  },
  methods: {
    onAudioSelected(event) {
      this.hasAttemptedUpload = true;
      const files = event.target.files;
      if (files && files.length > 0) {
        const uploadSound = files[0];

        // 이전에 생성된 Object URL이 있다면 해제
        if (this.audioSrc) {
          URL.revokeObjectURL(this.audioSrc);
        }

        this.audioSrc = URL.createObjectURL(uploadSound);
        this.selectedFileName = uploadSound.name;

        // audio 요소에 src 직접 할당 및 로드
        // $nextTick을 사용하여 DOM 업데이트가 완료된 후 audio 엘리먼트에 접근
        this.$nextTick(() => {
          if (this.$refs.player) {
            this.$refs.player.src = this.audioSrc; // source 태그 대신 audio 태그에 직접 src 설정
            this.$refs.player.load(); // 새 파일 로드
            this.$refs.player.volume = this.volume; // 초기 볼륨 설정
            this.currentVolume = this.volume;
            // this.$refs.player.play(); // 필요하다면 자동 재생
          }
        });

      } else {
        // 파일이 선택되지 않은 경우 (예: 사용자가 파일 선택 창을 취소한 경우)
        this.selectedFileName = '';
        if (this.audioSrc) {
          URL.revokeObjectURL(this.audioSrc);
          this.audioSrc = null;
        }
        if (this.$refs.player) {
          this.$refs.player.src = ""; // 플레이어 src 초기화
        }
      }
      // 같은 파일을 다시 선택할 수 있도록 입력 값 초기화
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = '';
      }
    },
    onVolumeChanged(event) {
      this.currentVolume = event.target.volume;
      this.volume = event.target.volume; // range input과 동기화
      // 필요하다면 여기서 currentVolume 값을 부모 컴포넌트로 emit 할 수 있습니다.
      // this.$emit('volume-changed', this.currentVolume);
    },
    getCurrentVolume() {
      return this.currentVolume;
    },
  },
  beforeUnmount() {
    // 컴포넌트가 파괴되기 전에 Object URL 해제
    if (this.audioSrc) {
      URL.revokeObjectURL(this.audioSrc);
    }
  },
};
</script>

<style scoped>
.music-upload-container {
  padding: 1.5rem;
  border: 2px dashed #ccc;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.file-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.file-input-label {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.file-input-label:hover {
  background-color: #0056b3;
}

.soundFileInput {
  /* 기본 파일 인풋은 숨김 */
  display: none;
}

.file-name-display {
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
}

.player {
  width: 100%;
  max-width: 500px; /* 오디오 플레이어 최대 너비 설정 */
  margin-top: 1rem;
}

.no-audio-message {
  color: #777;
  font-style: italic;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.volume-control label {
  font-size: 0.9rem;
  color: #333;
}

.volume-control input[type="range"] {
  width: 150px;
}

.volume-control span {
  font-size: 0.8rem;
  color: #666;
}
</style>