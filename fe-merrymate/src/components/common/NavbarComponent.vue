<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/images/logo5.png" alt="Logo" class="logo" @click="goHome" />
    </div>
    <div class="navbar-right">
      <button class="nav-button" @click="goToCreate" :class="{ selected: isSelectedCreate }">만들기</button>
      <button class="nav-button" @click="goToProfile" :class="{ selected: isSelectedProfile }">내 정보</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      currentSelected: "",
      currentUrl: "",
      isSelectedCreate: false, 
      isSelectedProfile: false, 
    }
  },
  watch: {
    '$route'() {
      const pathname = window.location.pathname;
      this.currentUrl = pathname.split('/')[1];
      if (this.currentUrl === "create") {
        this.isSelectedCreate = true;
        this.isSelectedProfile = false;
      } else if (this.currentUrl === "profile") {
        this.isSelectedProfile = true;
        this.isSelectedCreate = false;
      }
    }
  },
  created() {
    this.currentUrl = window.location.pathname;
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goToCreate() {
      this.$router.push('/create')
    },
    goToProfile() {
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: white;
  border-bottom: 1px solid #ddd;
  
  position: sticky;  /* 스크롤 시 고정 */
  top: 0;  /* 화면 상단에 고정 */
  z-index: 1000;  /* 다른 요소들보다 위에 표시되도록 설정 */
}

.logo {
  height: 30px;
  cursor: pointer;
}

.nav-button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  color: #232323;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 2s;
}

.nav-button:hover {
  background: radial-gradient(ellipse at center, #ecc9e5 0%, white 80%, white 100%);
}

.nav-button.selected {
  background: radial-gradient(ellipse at center, #ecc9e5 0%, white 80%, white 100%);
}
</style>
