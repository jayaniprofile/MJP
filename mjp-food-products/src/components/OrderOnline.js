import React, { useState } from "react";
import "../style/OrderOnline.css";
import Footer from "./Footer";
import Header from "./Header";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (id, value) => {
    setFormData({
      ...formData,
      items: {
        ...formData.items,
        [id]: value,
      },
    });
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
    <>
      <Header />
      <div className="order-online">
        <h1>Order Online</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required={formData.pickupOrDelivery === "delivery"}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Pickup or Delivery:
            <select
              name="pickupOrDelivery"
              value={formData.pickupOrDelivery}
              onChange={handleChange}
            >
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery</option>
            </select>
          </label>
          <fieldset>
            <legend>Select Items:</legend>
            {itemsList.map((item) => (
              <label key={item.id} className="item-label">
                <span>
                  {item.name} - Rs: {item.price}
                </span>
                <input
                  type="number"
                  min="0"
                  name={item.name}
                  value={formData.items[item.id] || 0}
                  onChange={(e) =>
                    handleItemChange(item.id, Number(e.target.value))
                  }
                />
              </label>
            ))}
          </fieldset>
          <label>
            Special Instructions:
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
            ></textarea>
          </label>
          <h2>Total Price: Rs: {calculateTotal()}</h2>
          <button type="submit">Submit Order</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default OrderOnline;
