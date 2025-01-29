<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';

const switcher = ref(null);
const { locale: currentLocale, t } = useI18n();
const opened = ref(false);
const selectLang = (locale): void => {
  opened.value = false;
  currentLocale.value = locale;
}
</script>
<template>
  <div class="lang-switcher" ref="switcher">
    <div class="lang-switcher__trigger" @click="opened = !opened">
      {{ t(`shortLanguages.${currentLocale}`) }}
      <IconArrowDown class="dropdown__trigger-arrow" />
    </div>
    <div v-show="opened" class="lang-switcher__body">
      <div v-for="locale in $i18n.availableLocales" :key="locale" class="lang-switcher__item"
           @click="selectLang(locale)">
        {{ t(`languages.${locale}`) }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.lang-switcher {
  position: relative;
  z-index: 1;
  font-weight: 700;
  font-size: rem(13);
  line-height: 140%;
  text-align: center;
  color: var(--gray-light);

  &__trigger {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: rem(4);
  }

  &__body {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    border-radius: rem(8);
    padding: rem(4);
    box-shadow: - rem(20) rem(20) rem(60) (- rem(16)) #181829d1;
    background: #ffffffd6;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: block;
      backdrop-filter: blur(20px);
    }
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: rem(1) solid #ffffff1e;
    height: rem(40);
    box-sizing: border-box;
    cursor: pointer;
    gap: rem(8);
    padding: rem(6) rem(16);

    &:hover {
      &::before {
        content: "";
        position: absolute;
        left: -4px;
        right: -4px;
        top: 0;
        bottom: 0;
        background: linear-gradient(90.66deg, #3CB9A0 0.57%, #1786AC 99.43%);
        opacity: 0.1;
      }
    }

    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>