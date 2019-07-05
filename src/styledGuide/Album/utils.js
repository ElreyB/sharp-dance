export function isImageURL(url) {
  return !!(url || "").match(/\.(jpg|png|jpeg|gif)[^/]*$/i);
}
