import { defineCollection, defineContentConfig } from "@nuxt/content";
import { footerDocSchema } from "./schemaTypes/footer";
import { sectionsDocSchema } from "./schemaTypes/sections";

export default defineContentConfig({
  collections: {
    sections: defineCollection({
      type: "data",
      schema: sectionsDocSchema,
      // Data collection items live under `content/sections/**`
      source: "sections/**.json",
    }),
    footer: defineCollection({
      type: "data",
      schema: footerDocSchema,
      // Data collection items live under `content/footer/**`
      source: "footer/**.json",
    }),
  },
});

