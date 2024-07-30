const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mjp-orders", {
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
  paymentStatus: String,
});

const Order = mongoose.model("Order", orderSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Routes
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    // Send email notification
    const mailOptions = {
      from: "your-email@gmail.com",
      to: "mjpfoodproducts@gmail.com",
      subject: "New Order Received",
      text: `
        Name: ${order.name}
        Email: ${order.email}
        Address: ${order.address}
        Phone: ${order.phone}
        Pickup/Delivery: ${order.pickupOrDelivery}
        Items: ${JSON.stringify(order.items, null, 2)}
        Instructions: ${order.instructions}
        Total Price: Rs: ${order.totalPrice}
      `,
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
