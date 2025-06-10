<template>
  <div>
    <h1>CreatePage</h1>
    <ButtonComponent
      type="primary"
      :onClick="handleCreateMobile"
    >
      Create Mobile Invitation
    </ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from '@/components/common/ButtonCmponent.vue';

export default {
  name: 'CreatePage',
  components: {
    ButtonComponent
  },
  methods: {
    handleCreateMobile() {
      this.flag_valid = true;
      this.$router.push('/create/mobile-invitation');
    },
  }
};
</script>
