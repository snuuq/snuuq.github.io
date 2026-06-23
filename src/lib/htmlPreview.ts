const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

export const getFirstRenderedBlock = (html: string) => {
  const firstParagraph = html.match(/<p\b[^>]*>[\s\S]*?<\/p>/i);
  if (firstParagraph) return firstParagraph[0];

  const firstBlock = html.match(/<(ul|ol|blockquote|pre|table)\b[^>]*>[\s\S]*?<\/\1>/i);
  return firstBlock ? firstBlock[0] : html;
};

const truncateInlineHtmlToFirstSentence = (html: string) => {
  const tokens = html.match(/<[^>]+>|[^<]+/g) ?? [];
  const openTags: string[] = [];
  let output = "";

  for (const token of tokens) {
    if (token.startsWith("<")) {
      output += token;

      const closingTag = token.match(/^<\/\s*([a-z0-9-]+)/i);
      if (closingTag) {
        const tagName = closingTag[1].toLowerCase();
        const tagIndex = openTags.lastIndexOf(tagName);
        if (tagIndex >= 0) openTags.splice(tagIndex, 1);
        continue;
      }

      const openingTag = token.match(/^<\s*([a-z0-9-]+)/i);
      if (!openingTag || token.endsWith("/>")) continue;

      const tagName = openingTag[1].toLowerCase();
      if (!voidTags.has(tagName) && !token.startsWith("<!") && !token.startsWith("<?")) {
        openTags.push(tagName);
      }
      continue;
    }

    const firstSentence = token.match(/[\s\S]*?[.!?](?=\s|$)/);
    if (!firstSentence) {
      output += token;
      continue;
    }

    output += firstSentence[0];
    return `${output}${openTags.slice().reverse().map((tagName) => `</${tagName}>`).join("")}`;
  }

  return html;
};

export const truncateRenderedBlockToFirstSentence = (html: string) => {
  const trimmed = html.trim();
  const paragraphMatch = trimmed.match(/^<p\b([^>]*)>([\s\S]*?)<\/p>$/i);
  if (!paragraphMatch) return trimmed;

  const attributes = paragraphMatch[1];
  const innerHtml = paragraphMatch[2];
  return `<p${attributes}>${truncateInlineHtmlToFirstSentence(innerHtml)}</p>`;
};
