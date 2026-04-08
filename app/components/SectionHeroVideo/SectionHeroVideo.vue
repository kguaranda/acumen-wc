<script setup lang="ts">
  import VideoLoop from "@/components/VideoLoop.vue";

  defineProps<{
    videoSrc: string;
  }>();
</script>

<template>
  <div>
    <div class="section-hero-video relative">
      <VideoLoop
        v-if="videoSrc"
        :src="videoSrc"
        video-class="cover  absolute top-0 left-0 w-full h-full section-hero-video__video section-hero-video__video__1"
      />

      <VideoLoop
        v-if="videoSrc"
        :src="videoSrc"
        video-class="cover absolute top-0 left-0 w-full h-full section-hero-video__video section-hero-video__video__2"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .section-hero-video {
    aspect-ratio: 1307/600;

    overflow: hidden;
    &__video {
      // border-radius: 30px;

      &__1 {
        // aspect-ratio: 1310/600;
        -webkit-mask-image: url("/_include/ui/video-mask-left.svg");
        mask-image: url("/_include/ui/video-mask-left.svg");
        mask-repeat: no-repeat;
        -webkit-mask-size: 81.1% 100%;
        mask-size: 81.1% 100%;
        mask-position: left center;
      }
      &__2 {
        // aspect-ratio: 1310/600;
        -webkit-mask-image: url("/_include/ui/video-mask-right.svg");
        mask-image: url("/_include/ui/video-mask-right.svg");
        mask-repeat: no-repeat;
        -webkit-mask-size: 19.1% 100%;
        mask-size: 19.1% 100%;
        mask-position: right center;
      }
    }
  }
</style>
