<script setup lang="ts">
import CardItem from '@/components/cards/CardItem.vue';
import { useAPIStore } from '@/store';

const apiStore = useAPIStore();
</script>
<template>
  <main>
    <p v-if="apiStore.getErrorsList">
      {{ apiStore.getErrorsList }}
    </p>
    <ul v-else>
      <card-item
        v-for="item in apiStore.apiData"
        :key="item.id"
        :card="item"
      />
    </ul>
  </main>
</template>