import React, { useState } from "react";
import { OrderOnlineStyled } from "./Order.styled";
import { OrderForm } from "../../common/Form";

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

  const itemsList = [
    { id: 1, name: "Kottu", price: 300 },
    { id: 2, name: "Parata", price: 300 },
    { id: 3, name: "Godamba Roti", price: 300 },
    { id: 4, name: "Lasagna Sheet", price: 300 },
    { id: 5, name: "Chocolate Cake", price: 2000 },
    { id: 6, name: "Butter Cake", price: 1500 },
    { id: 7, name: "Cup Cake", price: 200 },
    { id: 8, name: "Icing Cake", price: 5000 },
  ];

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
