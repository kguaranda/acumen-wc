import Clarity from "@microsoft/clarity";

export default defineNuxtPlugin(() => {
  const { public: config } = useRuntimeConfig();

  console.log("clarity config", config.CLARITY_PROJECT_ID);

  if (!config.CLARITY_PROJECT_ID) return;

  Clarity.init(config.CLARITY_PROJECT_ID as string);
});
