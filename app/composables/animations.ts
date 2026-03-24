export const useGSAP = () => {
  const nuxtApp = useNuxtApp();

  return {
    gsap: nuxtApp.$gsap,
    ScrollTrigger: nuxtApp.$ScrollTrigger,
    SplitText: nuxtApp.$SplitText,
    ScrollSmoother: nuxtApp.$ScrollSmoother,
    DrawSVGPlugin: nuxtApp.$DrawSVGPlugin,
  };
};

export const waitForRefs = (...refs: Ref<HTMLElement | null>[]) => {
  const refsAreReady = ref(false);
  onMounted(async () => {
    await nextTick();

    const checkReferences = () => refs.every((ref) => ref.value !== null);

    while (!checkReferences()) {
      await nextTick();
    }

    refsAreReady.value = true;
  });

  return { refsAreReady };
};
