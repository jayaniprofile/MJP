import React, { useState } from "react";
import "../style/OrderOnline.css";

function OrderOnline() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pickupOrDelivery: "pickup",
    items: [],
    instructions: "",
  });

  const items = [
    { id: 1, name: "Kottu", price: 5 },
    { id: 2, name: "Parata", price: 2 },
    { id: 3, name: "Gothamba Roti", price: 1 },
    { id: 4, name: "Chocolate Cake", price: 10 },
    { id: 5, name: "Butter Cake", price: 8 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (e) => {
    const { value, checked } = e.target;
    const newItems = checked
      ? [...formData.items, value]
      : formData.items.filter((item) => item !== value);
    setFormData({
      ...formData,
      items: newItems,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Submitted!"); // Here you can integrate with your backend or external service
  };

  return (
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
          {items.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                name="items"
                value={item.name}
                checked={formData.items.includes(item.name)}
                onChange={handleItemChange}
              />
              {item.name} - ${item.price}
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
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default OrderOnline;
