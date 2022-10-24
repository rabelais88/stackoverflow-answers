<template>
  <div>
    <input-email />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InputEmail from './InputEmail.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    InputEmail,
  },
});
</script>
