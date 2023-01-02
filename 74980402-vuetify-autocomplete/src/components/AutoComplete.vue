<template>
  <div>
    <h1>autocomplete</h1>
    <v-autocomplete
      v-model:search="keyword"
      v-model="select"
      :items="items"
      :loading="loading"
      @focus="() => query(keyword)"
    />
  </div>
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
