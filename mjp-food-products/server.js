const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  pickupOrDelivery: String,
  items: Object,
  instructions: String,
  totalPrice: Number,
});

const Order = mongoose.model("Order", orderSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Routes
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    // Prepare email content
    const orderDetails = `
      Name: ${order.name}
      Email: ${order.email}
      Address: ${order.address}
      Phone: ${order.phone}
      Pickup/Delivery: ${order.pickupOrDelivery}
      Items: ${JSON.stringify(order.items, null, 2)}
      Instructions: ${order.instructions}
      Total Price: Rs: ${order.totalPrice}
    `;

    // Send email notification to the owner
    const mailOptions = {
      from: process.env.EMAIL_USER, // The owner's email
      to: "jayanipathirana100@gmail.com", // Owner's email
      subject: "New Order Received",
      replyTo: order.email, // Customer's email for direct replies
      text: orderDetails,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(201).send(order);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
