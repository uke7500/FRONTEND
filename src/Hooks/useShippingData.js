import axios from "axios"

const useShippingData = async (id) => {

    const STRAPI_API = import.meta.env.VITE_STRAPI_URL;

    const API_URL = STRAPI_API + "/api/shippings";

    const res = await axios.get(API_URL);

    // Array of orders
    const info = res.data.data;

    info.filter((shippingData) => shippingData.id !== id);

    // Get last object
    const shippingInfo = info[info.length - 1];

    return shippingInfo;
}

export default useShippingData
