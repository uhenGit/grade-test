<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import CardList from '@/components/cards/CardList.vue';
import MainLoader from '@/components/MainLoader.vue';
import { useAPIStore } from '@/store';

const isLoading = ref(false);
const apiStore = useAPIStore();
onBeforeMount(async () => {
  apiStore.dropErrors();

  if (!apiStore.apiData.length) {
    try {
      isLoading.value = true;
      await apiStore.loadData();
    } finally {
      isLoading.value = false;
    }
  }
})
</script>
<template>
  <main-loader v-if="isLoading" />
  <card-list v-else />
</template>