import React, { useState } from "react";
import { OrderOnlineStyled } from "./Order.styled";
import { OrderForm } from "../../common/Form";
import itemsList from "../../data/items.json";

function OrderOnline() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pickupOrDelivery: "pickup",
    items: {},
    instructions: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (id, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      items: {
        ...prevFormData.items,
        [id]: value,
      },
    }));
  };

  const calculateTotal = () => {
    return itemsList.reduce((total, item) => {
      const quantity = formData.items[item.id] || 0;
      return total + item.price * quantity;
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = calculateTotal();

    const orderData = {
      ...formData,
      totalPrice: total,
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order Submitted Successfully!");
      } else {
        alert("Failed to submit order");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <OrderOnlineStyled>
      <h1>Order Online</h1>
      <OrderForm
        itemsList={itemsList}
        formData={formData}
        handleChange={handleChange}
        handleItemChange={handleItemChange}
        calculateTotal={calculateTotal}
        handleSubmit={handleSubmit}
      />
    </OrderOnlineStyled>
  );
}

export default OrderOnline;
