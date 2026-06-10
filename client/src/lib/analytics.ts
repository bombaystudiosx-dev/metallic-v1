export function loadAnalytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!endpoint || !websiteId) {
    return;
  }

  try {
    const script = document.createElement("script");
    script.defer = true;
    script.src = `${String(endpoint).replace(/\/+$/, "")}/umami`;
    script.dataset.websiteId = websiteId;
    document.body.appendChild(script);
  } catch {
    // Analytics must never block app startup.
  }
}
