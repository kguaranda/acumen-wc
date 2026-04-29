type RouteLike = {
  query: Record<string, unknown>;
};

function normalizeQueryValue(value: unknown): string | null {
  if (value === null || value === undefined) return null;
  if (Array.isArray(value)) return value[0] != null ? String(value[0]) : null;
  return typeof value === "string" ? value : String(value);
}

/**
 * Read a query param from the current route.
 *
 * Examples:
 * - `?popup`     -> `getUrlQueryParam('popup') === ''`
 * - `?popup=1`   -> `=== '1'`
 * - no param      -> `null`
 */
export function getUrlQueryParam(
  key: string,
  route: RouteLike = useRoute()
): string | null {
  const query = route.query ?? {};
  return normalizeQueryValue((query as Record<string, unknown>)[key]);
}

/**
 * Check if a query param key exists on the URL.
 *
 * For `?popup` (no explicit value), this still returns `true`.
 */
export function hasUrlQueryParam(
  key: string,
  route: RouteLike = useRoute()
): boolean {
  const query = route.query ?? {};
  return Object.prototype.hasOwnProperty.call(query, key);
}

