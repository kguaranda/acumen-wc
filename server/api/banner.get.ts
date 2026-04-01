export default defineEventHandler(() => {
  // Placeholder endpoint for the banner section.
  // Later this can be replaced with a real upstream call / CMS integration.
  return [
    { batch: "A", name: "Welcome to Acumen" },
    { batch: "A", name: "This is placeholder data from /api/banner" },
    { batch: "B", name: "Replace me with real content later" },
    { batch: "C", name: "Name nonsense" },
    { batch: "D", name: "Name nonsense" },
    { batch: "E", name: "Name nonsense" },
    { batch: "F", name: "Name nonsense" },
    { batch: "G", name: "Name nonsense" },
    { batch: "H", name: "Name nonsense" },
    { batch: "I", name: "Name nonsense" },
    { batch: "J", name: "Name nonsense" },
  ];
});
