// createStrapiOrder.js

const createStrapiOrder = async ({
  productData,
  cartSubTotal,
  shipping,
  discount,
  finalPrice,
  orderId,
} = {}) => {
  try {
    const STRAPI_API = import.meta.env.VITE_STRAPI_URL;

    const shippingInfo = await fetch(STRAPI_API + "/api/shippings");
    const shippingData = await shippingInfo.json();

    const shippingTemp = shippingData.data.filter(
      (item) => item.order_id == orderId
    );

    const shipping_documentId = shippingTemp[0]?.documentId;
    // console.log("Shipping Document ID:", shipping_documentId);

    // build orderItems from productData
    const orderItems = productData.map((item) => ({
      product: item.documentId,
      quantity: item.quantity,
    }));

        const response = await fetch(STRAPI_API + "/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    total_price: finalPrice.toFixed(2),
                    cart_subtotal_price: cartSubTotal,
                    discount,
                    shipping_charges: shipping,
                    order_item: orderItems,
                    shipping: shipping_documentId,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to create order: ${response.status}`);
        }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error creating order:", error.message);
    return null;
  }
};

export default createStrapiOrder;
