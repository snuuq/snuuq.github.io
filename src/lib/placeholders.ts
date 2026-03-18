const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const toDataUri = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

export const avatarPlaceholder = (label: string, accent = "#cddae2") =>
  toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-label="${escapeXml(label)}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dbe4ea"/>
          <stop offset="100%" stop-color="${accent}"/>
        </linearGradient>
      </defs>
      <rect width="640" height="640" fill="url(#g)"/>
      <circle cx="320" cy="245" r="118" fill="#f8f5ee"/>
      <path d="M150 542c31-86 97-130 170-130s139 44 170 130" fill="#f8f5ee"/>
    </svg>
  `);

export const galleryPlaceholder = (label: string) =>
  toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${escapeXml(label)}">
      <rect width="800" height="600" fill="#dfe7ed"/>
      <rect x="64" y="84" width="672" height="432" rx="28" fill="#f7f3eb"/>
      <path d="M118 430l138-146 102 88 122-144 202 202H118Z" fill="#c7d5e1"/>
      <circle cx="258" cy="214" r="48" fill="#102542"/>
      <text x="400" y="540" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#102542">${escapeXml(label)}</text>
    </svg>
  `);

export const bannerPlaceholder = (scene: "home" | "research" | "publications" | "members" | "news" | "seminars" | "gallery") => {
  const scenes = {
    home: {
      bg: "#d7bf56",
      blobs: ["#f2d526", "#7d6a2d", "#f0e0a1", "#6c5136"]
    },
    research: {
      bg: "#5f666f",
      blobs: ["#2d3037", "#bdb38f", "#8f9aac", "#4b4f55"]
    },
    publications: {
      bg: "#64605d",
      blobs: ["#2a2625", "#99856a", "#d2d1c1", "#8a8995"]
    },
    members: {
      bg: "#ab9d77",
      blobs: ["#3d342d", "#d8c98c", "#7e7c70", "#cbb99f"]
    },
    news: {
      bg: "#8f9db5",
      blobs: ["#bcc4cf", "#646c77", "#d9d2c7", "#8ea8c2"]
    },
    seminars: {
      bg: "#8f9573",
      blobs: ["#d3c79e", "#54543e", "#a5a47e", "#6d7588"]
    },
    gallery: {
      bg: "#9fb5c5",
      blobs: ["#dce5ec", "#7a8ea0", "#c6a06a", "#5e6d78"]
    }
  }[scene];

  return toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 540" role="img" aria-label="${escapeXml(scene)} banner">
      <defs>
        <filter id="blur"><feGaussianBlur stdDeviation="34"/></filter>
      </defs>
      <rect width="1600" height="540" fill="${scenes.bg}"/>
      <g filter="url(#blur)" opacity="0.92">
        <ellipse cx="210" cy="410" rx="180" ry="120" fill="${scenes.blobs[0]}"/>
        <ellipse cx="520" cy="250" rx="230" ry="160" fill="${scenes.blobs[1]}"/>
        <ellipse cx="910" cy="210" rx="260" ry="180" fill="${scenes.blobs[2]}"/>
        <ellipse cx="1320" cy="320" rx="240" ry="170" fill="${scenes.blobs[3]}"/>
      </g>
      <rect width="1600" height="540" fill="rgba(0,0,0,0.22)"/>
    </svg>
  `);
};

export const topicPlaceholder = (label: string, accent = "#cfe7f6") =>
  toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620" role="img" aria-label="${escapeXml(label)} illustration">
      <rect width="900" height="620" fill="${accent}"/>
      <rect x="72" y="76" width="756" height="468" fill="#ffffff" opacity="0.68"/>
      <rect x="102" y="108" width="220" height="132" fill="#9fb9cf"/>
      <rect x="340" y="108" width="220" height="132" fill="#d4e0ea"/>
      <rect x="578" y="108" width="220" height="132" fill="#90aab8"/>
      <rect x="102" y="266" width="696" height="214" fill="#7b93a7" opacity="0.78"/>
      <text x="450" y="566" text-anchor="middle" font-family="Georgia, serif" font-size="32" fill="#203447">${escapeXml(label)}</text>
    </svg>
  `);
