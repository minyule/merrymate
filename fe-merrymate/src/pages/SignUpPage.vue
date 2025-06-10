<template>
  <div>
    <h1>SignUp Page</h1>
    <p>Welcome to the SignUp page!</p>
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
    <InputComponent
      v-model="user_password2"
      label="PASSWORD again"
      placeholder="PASSWORD2"
    />
    <InputComponent
      v-model="user_name"
      label="NAME"
      placeholder="NAME"
    />
    <InputComponent
      v-model="user_email"
      label="E-MAIL"
      placeholder="E-MAIL"
    />
    <InputComponent
      v-model="user_phone"
      label="Phone Number"
      placeholder="Phone Number"
    />
    <ButtonComponent
      type="primary"
      :onClick="handleSignUp"
    >
      Sign up
    </ButtonComponent>

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
  name: 'SignUpPage',
  components: {
    InputComponent,
    ButtonComponent
  },
  data() {
    return {
      user_id: '',
      user_password: '',
      user_password2: '',
      user_name: '',
      user_email: '',
      user_phone: '',

      flag_valid: false,
    };
  },
  methods: {
    handleSignUp() {
      this.flag_valid = true;
      alert('TODO: handleSignUp');
    },
    returnToLoginPage() {
      this.$router.push('/login');
    }
  }
};
</script>
