

const useTags = async () => {
    const data = await fetch("https://uke-strapi.onrender.com/api/tags");
    const tags = await data.json();
    return tags;
}

export default useTags;
