const useTags = async () => {
  const STRAPI_API = import.meta.env.VITE_STRAPI_URL;
  const data = await fetch(
    STRAPI_API + "/api/tags?pagination[page]=1&pagination[pageSize]=200"
  );
  const tags = await data.json();
  return tags;
};

export default useTags;
