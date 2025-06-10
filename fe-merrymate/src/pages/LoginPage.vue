<template>
  <div>
    <h1>Login Page</h1>
    <InputComponent
      v-model="user_id"
      label="ID"
      placeholder="ID"
    />
    <InputComponent
      v-model="user_password"
      label="PASSWORD"
      placeholder="PASSWORD"
    />
    <ButtonComponent
      type="primary"
      :onClick="handleLogin"
    >
      Log in
    </ButtonComponent>

    <br />
    <a href="/auth-recovery">Forget ID / Password?</a>
    <br />
    <a href="/sign-up">Join us!</a>
  </div>
</template>

<script>
import InputComponent from '@/components/common/InputComponent.vue';
import ButtonComponent from '@/components/common/ButtonCmponent.vue';

export default {
  name: 'LoginPage',
  components: {
    InputComponent,
    ButtonComponent
  },
  data() {
    return {
      user_id: '',
      user_password: '',

      flag_valid: false,
    };
  },
  methods: {
    handleLogin() {
      this.flag_valid = true;
      this.$router.push('/');
    },
  }
};
</script>
