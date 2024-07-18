import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "../style/OrderOnline.css";
import Footer from "./Footer";
import Header from "./Header";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

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

  const [clientSecret, setClientSecret] = useState("");

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
        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } else {
        alert("Failed to submit order");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Elements stripe={stripePromise}>
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
        {clientSecret && <StripePaymentForm clientSecret={clientSecret} />}
      </div>
      <Footer />
    </Elements>
  );
}

function StripePaymentForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment succeeded!");
      }
    }
  };

  return (
    <form onSubmit={handlePaymentSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default OrderOnline;
