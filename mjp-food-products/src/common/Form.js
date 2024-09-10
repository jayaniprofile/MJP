import React from "react";

export const ItemField = ({ item, value, onChange }) => (
  <label className="item-label">
    <span>
      {item.name} - Rs: {item.price}
    </span>
    <input
      type="number"
      min="0"
      name={item.name}
      value={value}
      onChange={(e) => onChange(item.id, Number(e.target.value))}
    />
  </label>
);

export const UserInfoForm = ({ formData, handleChange }) => {
  const { name, email, address, phone, pickupOrDelivery } = formData;

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          required={pickupOrDelivery === "delivery"}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Pickup or Delivery:
        <select
          name="pickupOrDelivery"
          value={pickupOrDelivery}
          onChange={handleChange}
        >
          <option value="pickup">Pickup</option>
          <option value="delivery">Delivery</option>
        </select>
      </label>
    </>
  );
};

export const OrderForm = ({
  itemsList,
  formData,
  handleChange,
  handleItemChange,
  calculateTotal,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <UserInfoForm formData={formData} handleChange={handleChange} />

    <fieldset>
      <legend>Select Items:</legend>
      {itemsList.map((item) => (
        <ItemField
          key={item.id}
          item={item}
          value={formData.items[item.id] || 0}
          onChange={handleItemChange}
        />
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
);
