export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (!body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email is required",
    });
  }

  try {
    const response = await $fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${config.public.HUBSPOT_PORTAL_ID}/${config.public.HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.HUBSPOT_TOKEN}`,
        },
        body: {
          fields: [
            { name: "email", value: body.email },
            body.fname && { name: "firstname", value: body.fname },
            body.lname && { name: "lastname", value: body.lname },
          ].filter(Boolean),
          context: {
            pageUri: config.public.HUBSPOT_BASE_URL,
            pageName: config.public.HUBSPOT_PAGE_NAME,
          },
        },
      }
    );

    return { success: true, data: response };
  } catch (error: unknown) {
    console.error("HubSpot API error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to submit to HubSpot",
    });
  }
});
