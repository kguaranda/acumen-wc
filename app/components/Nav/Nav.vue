<script setup lang="ts">
  import type { FooterMenuItem } from "../../../schemaTypes/footer";

  defineProps<{
    items: FooterMenuItem[];
  }>();
</script>

<template>
  <div class="nav flex row wrap gap-md md:gap lg:gap-md">
    <a
      v-for="item in items"
      :key="item.text"
      :href="item.url"
      target="_blank"
      class="nav__item text text-body-sm"
      >{{ item.text }}</a
    >
  </div>
</template>

<style scoped lang="scss"></style>
