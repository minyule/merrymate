<template>
  <div class="box">
    <div class="title">지도, 오시는 길</div>

    <button @click="openPostcodePopup">우편번호 검색</button>
    <div v-if="hallAddressData">{{ hallAddressData }}</div>

    <hr />

    <div class="route-input-section">
      <h3>오시는 길 추가</h3>
      <div v-for="(route, index) in routes" :key="index" class="route-item">
        <select v-model="route.type">
          <option value="bus">버스</option>
          <option value="subway">지하철</option>
          <option value="walk">도보</option>
        </select>
        <input type="text" v-model="route.detail" placeholder="노선 번호 또는 설명" />
        <button @click="removeRoute(index)">삭제</button>
      </div>
      <button @click="addRoute">+</button>
    </div>

    <div>
      <h3>오시는 길 목록</h3>
      <ul v-if="routes.length > 0">
        <li v-for="(route, index) in routes" :key="index">
          {{ getRouteText(route) }}
        </li>
      </ul>
      <div v-else>등록된 오시는 길이 없습니다.</div>
    </div>

    <div>
      <h3>지도 표시 (TODO)</h3>
      <div>선택된 주소를 기반으로 지도를 표시할 영역입니다.</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MapCreateComponent',
  data() {
    return {
      hallAddressData: "",
      routes: [], // 오시는 길 정보를 담는 배열
    };
  },
  methods: {
    // 다음 주소 스크립트 로드
    loadPostcodeScript() {
      return new Promise((resolve, reject) => {
        if (window.daum && window.daum.Postcode) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.onload = () => {
          if (window.daum && window.daum.Postcode) {
            resolve();
          } else {
            reject(new Error('daum.Postcode 로딩 실패'));
          }
        };
        script.onerror = () => reject(new Error('스크립트 로드 오류'));
        document.body.appendChild(script);
      });
    },

    // 주소 검색 팝업 열기
    async openPostcodePopup() {
      try {
        await this.loadPostcodeScript();

        new window.daum.Postcode({
          oncomplete: (data) => {
            // 주소 결과 처리
            this.hallAddressData = data.address;
            console.log('선택된 주소:', this.hallAddressData);
            // TODO: 선택된 주소를 기반으로 지도 표시 기능 연동
          }
        }).open();
      } catch (error) {
        console.error('다음 우편번호 팝업 로딩 실패:', error);
        alert('우편번호 서비스를 불러오는 데 실패했습니다.');
      }
    },

    // 오시는 길 항목 추가
    addRoute() {
      this.routes.push({ type: 'bus', detail: '' });
    },

    // 오시는 길 항목 삭제
    removeRoute(index) {
      this.routes.splice(index, 1);
    },

    // 오시는 길 텍스트 생성
    getRouteText(route) {
      switch (route.type) {
        case 'bus':
          return `버스: ${route.detail}`;
        case 'subway':
          return `지하철: ${route.detail}`;
        case 'walk':
          return `도보: ${route.detail}`;
        default:
          return '';
      }
    }
  }
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
  margin-bottom: 10px;
}

.route-input-section {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 3px;
}

.route-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
}

.route-item select,
.route-item input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.route-item button {
  padding: 8px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.route-item button:hover {
  background-color: #d32f2f;
}

.route-input-section button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
}

.route-input-section button:hover {
  background-color: #0056b3;
}

h3 {
  margin-top: 15px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 8px 0;
  border-bottom: 1px dotted #eee;
}

ul li:last-child {
  border-bottom: none;
}
</style>