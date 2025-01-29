<script setup lang="ts">
import { onBeforeMount } from 'vue';
import CardList from '@/components/cards/CardList.vue';
import { useAPIStore } from '@/store';

const apiStore = useAPIStore();
onBeforeMount(async () => {
  apiStore.dropErrors();

  if (!apiStore.apiData.length) {
    await apiStore.loadData();
  }
})
</script>
<template>
  <card-list />
</template>