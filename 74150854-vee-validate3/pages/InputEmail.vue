<template>
  <div>
    <h1>{{ $t('email') }}</h1>
    <ValidationProvider v-slot="{ errors }" name="email" rules="required">
      <input v-model="value" type="text" />
      <span id="error">{{ errors[0] }}</span>
    </ValidationProvider>
    <button>submit</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InputEmail',
  data: () => ({
    value: '',
  }),
});
</script>
