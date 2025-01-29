<script setup lang="ts">
import { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { apiResponse } from '@/types/APIResponse.ts';
import IconGoogle from '@/components/icons/IconGoogle.vue';
import StarRating from '@/components/StarRating.vue';

interface Props {
  card: {
    rate: number,
    feedbackQuantity: number
  }
}

const props: Props = defineProps({
  card: {
    type: Object as PropType<apiResponse>,
    default: () => ({}),
  }
});
const { t } = useI18n();

const displayAlert = () => {
  alert(t('alertText'))
}
</script>
<template>
  <li class="flex flex-between w-100 wrap">
    <div class="flex feedback">
      <div class="flex feedback--text">
        <IconGoogle />
        <p class="feedback--text__description">{{ t('feedbackText') }}</p>
      </div>
      <div class="flex feedback--data">
        <p class="feedback--data__rate">{{ props.card.rate }}</p>
        <div class="feedback--data__stars">
          <star-rating
            :rating="props.card.rate"
            width="30px"
            height="30px"
            disabled
          />
        </div>
        <span class="feedback--data__quantity">{{ props.card.feedbackQuantity }} {{ t('feedbackLabel') }}</span>
      </div>
    </div>
    <div class="flex actions">
      <button
          class="flex gradient-border actions--outer"
          @click="displayAlert"
      >
        {{ t('feedbackView') }}
      </button>
      <a
          href="https://grade.ua/"
          target="_blank"
          class="flex actions--addition"
      >
        {{ t('feedbackWrite') }}
      </a>
    </div>
  </li>
</template>
<style scoped lang="scss">
.wrap {
  margin: rem(24) auto;
  width: 76%;
  padding: rem(30);
  border-radius: rem(8);
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.05);
}

.feedback {
  gap: rem(60);

  &--text {
    gap: rem(20);

    &__description {
      font-size: rem(20);
      font-weight: 500;
      line-height: 157%; /* 22px */
    }
  }

  &--data {
    gap: rem(20);

    &__rate {
      font-size: rem(36);
      font-weight: 500;
      line-height: 122%; /* 44px */
    }

    &__stars {}

    &__quantity {
      font-size: rem(14);
      font-weight: 400;
      line-height: 157%; /* 22px */
      color: #798595;
    }
  }
}

.actions {
  gap: rem(10);

  button, a {
    border-radius: rem(8);
    padding: rem(10) rem(20);
    font-size: rem(14);
    font-weight: 500;
    line-height: 157%; /* 22px */
    cursor: pointer;
  }

  &--outer {
    background: linear-gradient(90deg, #E6F7F5 0%, #F8FCFC 100%);
    border: transparent;
  }

  &--addition {
    background: linear-gradient(90.66deg, #3CB9A0 0.57%, #1786AC 99.43%);
    color: var(--main-background);
  }
}

@media screen and (max-width: $laptop) {
  .wrap {
    width: 90%;
  }
}

@media screen and (max-width: $tablet) {
  .feedback {
    flex-direction: column;
    align-items: start;
    gap: rem(10);

    &--text__description {
      font-size: rem(18);
    }

    &--data__rate {
      font-size: rem(24);
    }
  }
}

@media screen and (max-width: $phablet) {
  .wrap {
    flex-direction: column;
    gap: rem(20);
  }

  .actions {
    flex-direction: column;
    width: 100%;

    button, a {
      width: 100%;
    }
  }
}
</style>