<script setup lang="ts">
  defineProps<{
    label?: string;
    open: boolean;
  }>();

  defineEmits<{
    (e: "click"): void;
  }>();
</script>

<template>
  <div class="back" :class="{ 'back--open': open }">
    <div class="back__content flex row justify-space-between px-md py-md">
      <div class="back__content__icon">
        <img src="/_include/images/logo-bar.svg" alt="Back to donation" />
      </div>
      <button
        class="back__button bg-blue color-white text text-heading-sm text-black flex items-center justify-center px-md py-md border-2 border-blue hover:bg-white hover:color-blue transition-all duration-default"
        type="button"
        @click="$emit('click')"
      >
        Donate
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .back {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $color-grey-light;
    z-index: 999;
    transform: translateY(100%);
    transition: transform 0.3s $ease-power4-in;

    &--open {
      transform: translateY(0);
      transition: transform 0.3s $ease-power4-out;
    }

    &__button {
      border-radius: 999px;
      padding: 10px 15px 8px 15px;
      line-height: 1;

      min-width: 170px;
      cursor: pointer;
    }
  }
</style>
