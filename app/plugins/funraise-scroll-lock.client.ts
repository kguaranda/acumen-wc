import { defineNuxtPlugin } from "#app";

function isFunraisePopupOpen(): boolean {
  const iframe = document.querySelector<HTMLIFrameElement>("iframe.fr_funraise.fr_form");
  if (!iframe) return false;
  const style = window.getComputedStyle(iframe);
  return style.position === "fixed" && style.display !== "none" && iframe.offsetWidth > 0;
}

export default defineNuxtPlugin(() => {
  let locked = false;
  let pollId: ReturnType<typeof setInterval> | null = null;

  function sync() {
    const shouldLock = isFunraisePopupOpen();

    if (shouldLock && !locked) {
      document.documentElement.style.overflow = "hidden";
      locked = true;
      if (!pollId) {
        pollId = setInterval(sync, 300);
      }
    } else if (!shouldLock && locked) {
      document.documentElement.style.overflow = "";
      locked = false;
      if (pollId) {
        clearInterval(pollId);
        pollId = null;
      }
    }
  }

  const observer = new MutationObserver(sync);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });
});
