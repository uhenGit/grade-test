<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import StarRating from '@/components/StarRating.vue';
import { useRateStore } from '@/store';

const { t } = useI18n();
const rateStore = useRateStore();

const setCustomRate = (val) => {
  rateStore.setCustomRate(val);
}
</script>
<template>
  <main class="flex column rating">
    <h2>{{ t('ratingHeader') }}</h2>
    <section class="flex">
      <star-rating @set-custom-rate="setCustomRate" />
    </section>
    <button
        class="reset-btn"
        @click="rateStore.resetCustomRate()"
    >Reset</button>
  </main>
</template>
<style scoped lang="scss">
.rating {
  margin-top: rem(16);
  gap: rem(24);
}

.reset-btn {
  padding: rem(10) rem(24);
  outline: none;
  border: none;
  cursor: pointer;
  background: var(--gray-dark);
  color: var(--main-background);
  border-radius: rem(4);
  font-size: rem(24);
  font-weight: 500;
  line-height: 150%;
}
</style>