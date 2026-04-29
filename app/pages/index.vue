<script setup lang="ts">
  import { hasUrlQueryParam } from "@/composables/useUrlQueryParam";
  import { sectionsDocSchema } from "../../schemaTypes/sections";
  import Sections from "../components/sections/Sections.vue";

  type QueryCollectionBuilder = {
    first: () => Promise<unknown>;
  };
  declare const queryCollection: (collection: string) => QueryCollectionBuilder;

  const { data: page } = await useAsyncData(() => {
    return queryCollection("sections").first();
  });

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Sections content not found",
    });
  }

  const validatedPage = sectionsDocSchema.parse(page.value as unknown);
  const sections = validatedPage.sections;

  const funraiseButtonRef = ref<HTMLButtonElement | null>(null);

  onMounted(() => {
    const shouldOpenFunraisePopup = hasUrlQueryParam("donate");
    if (!shouldOpenFunraisePopup) return;

    const maxAttempts = 60; // ~15s total at 250ms intervals

    let didClick = false;

    const tryClickFallback = (attempt: number) => {
      if (didClick) return;

      const funraise = (window as unknown as { funraise?: unknown }).funraise;
      const isWidgetReady = funraise != null;

      // Only click once the Funraise widget is loaded and has had a chance
      // to attach its button handlers.
      if (isWidgetReady) {
        didClick = true;
        funraiseButtonRef.value?.click();
        return;
      }

      if (attempt >= maxAttempts) return;
      window.setTimeout(() => tryClickFallback(attempt + 1), 500);
    };

    tryClickFallback(0);
  });
</script>

<template>
  <div>
    <!-- Hidden launcher for Funraise popup fallback -->
    <button
      ref="funraiseButtonRef"
      data-formId="49591"
      style="display: none"
      aria-hidden="true"
      tabindex="-1"
    />
    <main class="page-home min-h-screen md:pt-lg pb-lg md:pb-giga">
      <Sections :sections="sections" />
    </main>
  </div>
</template>

<style scoped lang="scss">
  /* Intentionally minimal */
</style>
