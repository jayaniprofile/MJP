import React from "react";

export const FormContent = ({ formData, handleChange, handleSubmit }) => (
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
      Message:
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
    </label>
    <button type="submit">Send</button>
  </form>
);
