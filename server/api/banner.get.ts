export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const apiKey = config.FUNRAISE_API_KEY as string;

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing FUNRAISE_API_KEY environment variable",
    });
  }

  try {
    const response = await $fetch(
      "https://api.funraise.io/api/v1/crm/donation",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Api-Key": apiKey,
        },
        query: {},
      }
    );
  } catch (error) {
    console.error("Failed to fetch banner data", error);
    return [];
  }

  return [
    { batch: "match-mvp", name: "Name Namesen" },
    { batch: "backline", name: "Name Namesen" },
  ];
});
