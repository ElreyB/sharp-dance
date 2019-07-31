export function findPage(pages, pageId) {
  if (Array.isArray(pages)) {
    return pages.find(({ id }) => id === pageId);
  }
  return undefined;
}
