<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRateStore } from '@/store';

const rateStore = useRateStore();
const emit = defineEmits(['set-custom-rate']);
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
  width: {
    type: String,
    default: '48px',
  },
  height: {
    type: String,
    default: '48px',
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});
const hoveredIdx = ref(0);
const hoveredWidth = ref(0);
const currentRate = computed(() => props.rating || rateStore.customRate);
const handleHover = (evt: MouseEvent,idx: number): void => {
  if (props.disabled) return;

  hoveredIdx.value = idx;
  const starEl = evt.currentTarget as HTMLElement;
  const starRect = starEl.getBoundingClientRect();
  const cursorX = evt.clientX - starRect.left;
  hoveredWidth.value = cursorX / starRect.width * 100;
}
const resetHover = (idx: number): void => {
  if (props.disabled) return;

  if (hoveredIdx.value === idx) {
    hoveredIdx.value = 0;
    hoveredWidth.value = 0;
  }
}
const getFilledWidth = (idx: number): string => {
  if (props.disabled || currentRate.value > idx - 1) return `${(currentRate.value - (idx - 1)) * 100}%`;

  if (hoveredIdx.value === idx) return `${hoveredWidth.value}%`;

  if (currentRate.value >= idx) return '100%';

  return '0%';
}
const getFilledColor = (idx: number): string => {
  if (currentRate.value >= idx || currentRate.value > idx - 1) return '#ffd700ff';

  return 'transparent';
}
const onSaveRating = () => {
  if (props.disabled) return;

  emit('set-custom-rate', hoveredIdx.value);
}
</script>
<template>
  <div
      class="flex rating-wrapper"
      :style="{ cursor: props.disabled ? 'default' : 'pointer' }"
      @mouseleave="resetHover"
      @click="onSaveRating"
  >
    <span
        v-for="idx in 5"
        :key="idx"
        class="star"
        :class="{ 'filled': hoveredIdx >= idx }"
        :style="{ width: props.width, height: props.height }"
        @mouseover="handleHover($event, idx)"
    >
      <span
        class="star-filled"
        :style="{
          width: getFilledWidth(idx),
          backgroundColor: hoveredIdx >= idx ? '#ffd700ff' : getFilledColor(idx),
        }"
      ></span>
    </span>
  </div>
</template>
<style scoped lang="scss">
.rating-wrapper {
  gap: rem(6);
  max-width: fit-content;
}
.star {
  position: relative;
  background-color: var(--background-light-12);
  clip-path: polygon(
          50% 0%,
          61% 35%,
          98% 35%,
          68% 57%,
          79% 91%,
          50% 70%,
          21% 91%,
          32% 57%,
          2% 35%,
          39% 35%
  );

  &-filled {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: width .2s ease, background-color .2s ease;
  }
}
</style>