<script setup lang="ts">
  import type { FooterSocialLink } from "../../../schemaTypes/footer";
  defineProps<{
    data: FooterSocialLink[];
  }>();
</script>

<template>
  <div class="social-links flex row justify-start gap">
    <a
      v-for="social in data"
      :key="social.platform"
      :href="social.url"
      target="_blank"
      class="social-links__item"
    >
      <NuxtImg :src="social.icon" :alt="social.platform" />
    </a>
  </div>
</template>

<style scoped lang="scss">
  .social-links {
    &__item {
      border-radius: 50%;
      background-color: $color-magenta;
      width: 30px;
      height: auto;
      transition: background-color 0.3s ease;

      @include can-hover {
        background-color: transparent;
      }

      @include lg-up {
        width: 40px;
      }

      @include can-hover {
        &:hover {
          background-color: $color-magenta;
        }
      }
    }
  }
</style>
