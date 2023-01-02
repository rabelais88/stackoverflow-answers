<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <v-autocomplete
      v-model:search="keyword"
      v-model="select"
      :items="items"
      :loading="loading"
      @focus="() => query(keyword)"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { fetchData } from '@/lib/mockedApi';

const select = ref(null);
const keyword = ref('');
const items = ref<string[]>([]);
const loading = ref(false);
const query = async (_keyword: string) => {
  loading.value = true;
  const filteredLists = await fetchData(_keyword);
  items.value = filteredLists;
  loading.value = false;
};
watch(keyword, (v) => {
  query(v);
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
