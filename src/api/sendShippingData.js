// Function to create an order
export const sendShippingData = async (orderData) => {
    const {
        firstName,
        middleName,
        lastName,
        address,
        zipCode,
        country,
        city,
        state,
        cellPhone,
        telephone,
        deliveryTime,
        shippingType,
        email,
        orderId,
    } = orderData;

    const full_name = firstName + " " + middleName + " " + lastName;

    const updatedData = {
        full_name: full_name,
        address: address,
        city: city,
        postal_code: zipCode,
        country: country,
        phone: cellPhone,
        state: state,
        delivery_time: deliveryTime,
        shipping_type: shippingType,
        email: email,
        order_id: orderId,
    }

    try {

        const STRAPI_API = import.meta.env.VITE_STRAPI_URL;

        const response = await fetch(STRAPI_API + "/api/shippings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: updatedData,  // 👈 Strapi requires payload inside "data"
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("❌ Error creating order:", errorData);
            throw new Error(errorData.error?.message || "Failed to create order");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("❌ Error creating order:", error.message);
        throw error;
    }


};
