const CAMPAIGN_START = new Date("2026-04-30T00:00:00Z");

const hoursSinceCampaignStart = () =>
  Math.ceil((Date.now() - CAMPAIGN_START.getTime()) / (1000 * 60 * 60));

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
        query: {
          pageSize: 100,
          lastHours: String(hoursSinceCampaignStart()),
        },
      },
    );

    return mapBannerData(response as unknown[]);
  } catch (error) {
    console.error("Failed to fetch banner data", error);
    return [];
  }
});

const mapBannerData = (data: unknown[]) => {
  if (!data || data.length === 0) return [];

  const seen = new Set<string>();

  return data
    .filter(
      (item: any) =>
        item?.form?.id === 49591 &&
        item.transaction.amount > 0 &&
        item.transaction?.billingFirstName,
    )
    .sort((a: any, b: any) => (b.donationDate ?? 0) - (a.donationDate ?? 0))
    .map((item: any) => ({
      firstname: item.transaction.billingFirstName,
      lastname: item.transaction.billingLastName,
      batch: batchType(item.transaction.amount),
    }))
    .filter((item) => {
      const key = `${item.firstname}|${item.lastname}`.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

const batchType = (amount: number) => {
  if (amount >= 1000) return "match-mvp";
  if (amount >= 500) return "backline";
  if (amount >= 100) return "midfield-engine";
  if (amount >= 25) return "super-sub";
  return "fan";
};
