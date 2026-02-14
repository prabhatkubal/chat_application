export const getPathFromUrl = (urlString: string) => {
  const parsedUrl = new URL(urlString);
  return parsedUrl.pathname;
};