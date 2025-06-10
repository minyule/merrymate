<template>
  <div>
    <div>아이디 찾기</div>
    <InputComponent
      v-model="user_name"
      label="Name"
      placeholder="Name"
    />
    <InputComponent
      v-model="user_id"
      label="ID"
      placeholder="ID"
    />
    <div>{{ user_found_id }}</div>
    <ButtonComponent
      type="primary"
      :onClick="handleFindId"
    >
      Find ID
    </ButtonComponent>
    
    <div>비밀번호 찾기</div>
    <InputComponent
      v-model="user_id"
      label="ID"
      placeholder="ID"
    />
    <InputComponent
      v-model="user_email"
      label="E-mail"
      placeholder="E-mail"
    />
    <div>{{ user_reseted_password }}</div>
    <ButtonComponent
      type="primary"
      :onClick="handleFindPassword"
    >
      Find Password
    </ButtonComponent>
    
    <br />
    <ButtonComponent
      type="primary"
      :onClick="returnToLoginPage"
    >
      Return to Login Page
    </ButtonComponent>
  </div>
</template>

<script>
import InputComponent from '@/components/common/InputComponent.vue';
import ButtonComponent from '@/components/common/ButtonCmponent.vue';

export default {
  name: 'AuthRecoveryPage',
  components: {
    InputComponent,
    ButtonComponent
  },
  data() {
    return {
      user_name: '',
      user_id: '',
      user_password: '',
      user_email: '',

      user_found_id: '',
      user_reseted_password: '',
    };
  },
  methods: {
    handleFindId() {
      this.user_found_id = "user found id";
      alert('TODO: handleFindId');
    },
    handleFindPassword() {
      this.user_reseted_password = "user reset password";
      alert('TODO: handleFindId');
    },
    returnToLoginPage() {
      this.$router.push('/login');
    }
  }
};
</script>
