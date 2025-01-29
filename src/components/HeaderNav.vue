<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import LangSwitcher from '@/components/LangSwitcher.vue';

const router = useRouter();
const { t } = useI18n();
const goToPage = (val) => {
  router.push({ name: val })
}
</script>
<template>
  <header class="w-100">
    <nav class="w-100">
      <ul class="flex links-list">
        <li
            class="flex w-100"
            @click="goToPage('index')"
        >
          {{ t('navHome') }}
        </li>
        <li
            class="flex w-100"
            @click="goToPage('rating')"
        >
          {{ t('navRating') }}
        </li>
      </ul>
      <div class="switcher-wrap">
        <lang-switcher />
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  z-index: 99;
}

.links-list {
  justify-content: space-around;

  li {
    padding: rem(16) rem(24);
    font-size: rem(32);
    font-weight: 700;
    line-height: 132%;
    align-self: center;
    border-bottom: 1px solid var(--gray-light);
    transition-duration: .3s;
    transition-property: background-color;
    background-color: var(--background-light-12);
    cursor: pointer;

    &:hover {
      background-color: var(--background-light-32);
    }
  }
}

.switcher-wrap {
  position: absolute;
  left: 2%;
  top: 5%;
}
</style>