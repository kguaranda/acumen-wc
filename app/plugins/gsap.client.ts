import { defineNuxtPlugin } from "#app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, DrawSVGPlugin);

  return {
    provide: {
      gsap,
      ScrollTrigger,
      SplitText,
      ScrollSmoother,
      DrawSVGPlugin,
    },
  };
});
