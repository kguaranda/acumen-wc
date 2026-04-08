<script setup lang="ts">
  import type { SectionItem } from "../../../schemaTypes/sections";
  import SectionHeroVideo from "@/components/SectionHeroVideo/SectionHeroVideo.vue";
  defineProps<{
    section: SectionItem;
  }>();
</script>

<template>
  <div class="section section-hero-container flex column gap-giga">
    <div class="section-hero relative">
      <SectionHeroVideo :video-src="section.props.videoSrc ?? ''" />

      <div
        class="section-hero__overlay flex row justify-space-between items-end"
      >
        <div>
          <img
            class="section-hero__icon mb-lg"
            src="/_include/icons/hero_icon.svg"
            :alt="section.props.title"
          />
          <h1 class="text text-heading-xl text-black color-white">
            {{ section.props.subhead }}
          </h1>
        </div>

        <div
          class="flex column gap-md h-full justify-space-between items-center py-md"
          style="width: 19.1%"
        >
          <NuxtImg
            class="logo"
            src="/_include/ui/Acumen-Logo-Top.svg"
            alt="Acumen"
          />

          <div class="flex column items-center justify-center gap">
            <span class="text text-body text-bold color-white">Swipe down</span>
            <NuxtImg
              src="/_include/icons/fan.svg"
              alt="Swipe down"
              style="width: 48px; height: auto"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex column gap-lg container-md">
      <RichText :richtext="section.props.richtext" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .section-hero-container {
    padding-left: 64px;
    padding-right: 64px;
  }
  .section-hero__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    bottom: 0px;
    padding: 0 0px 40px 30px;
    z-index: 1;

    .logo {
      width: 100px;
      height: auto;
    }
  }

  .section-hero__icon {
    display: block;
    width: 245px;
    height: auto;
  }
</style>
