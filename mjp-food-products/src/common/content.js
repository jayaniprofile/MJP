import choco from "../images/choco.jpeg";
import butter from "../images/butter.jpeg";
import cup from "../images/cup.jpeg";
import icing from "../images/icing.jpeg";
import kottu from "../images/kottu.jpeg";
import godamba from "../images/godamba.jpeg";
import parata from "../images/parata.jpeg";
import lasagna from "../images/lasagna.jpeg";
import cake from "../images/cake.jpeg";

export const menuItems = {
  sweets: [
    {
      name: "Chocolate Cake",
      description: "Delicious chocolate cake.",
      price: "Rs:2000/=",
      img: choco,
    },
    {
      name: "Butter Cake",
      description: "Soft and rich butter cake.",
      price: "Rs:1500/=",
      img: butter,
    },
    {
      name: "Cup Cake",
      description: "Sweet and delightful cupcakes.",
      price: "Rs:200/=",
      img: cup,
    },
    {
      name: "Icing Cake",
      description: "Beautifully decorated icing cake.",
      price: "Rs:5000/=",
      img: icing,
    },
  ],
  premade: [
    {
      name: "Kottu Roti",
      description: "Sri Lankan chopped flatbread.",
      price: "Rs:300/=",
      img: kottu,
    },
    {
      name: "Godamba Roti",
      description: "Traditional flatbread.",
      price: "Rs:300/=",
      img: godamba,
    },
    {
      name: "Parata Roti",
      description: "Flaky and delicious parata.",
      price: "Rs:300/=",
      img: parata,
    },
    {
      name: "Lasagna Sheets",
      description: "Perfect for homemade lasagna.",
      price: "Rs:300/=",
      img: lasagna,
    },
  ],
};

export const menuCategories = [
  {
    id: "sweets",
    image: require("../images/sw1.jpeg"),
    altText: "Sweets",
    title: "Sweets",
  },
  {
    id: "premade",
    image: require("../images/pre1.jpeg"),
    altText: "Pre-made Foods",
    title: "Pre-made Foods",
  },
];

export const homeItems = [
  {
    name: "Kottu",
    description:
      "A popular Sri Lankan dish made with chopped flatbread, vegetables, and spices.",
    img: kottu,
  },
  {
    name: "Parata",
    description:
      "Flaky and delicious, our paratas are a must-try for lovers of spicy food.",
    img: parata,
  },
  {
    name: "Godamba Roti",
    description:
      "A traditional Sri Lankan flatbread, perfect to accompany any spicy dish.",
    img: godamba,
  },
  {
    name: "Cake",
    description:
      "Our cakes are known for their rich flavor and moist texture, perfect for any occasion.",
    img: cake,
  },
];

export const contactInfo = {
  contactDetails: {
    phone: "070 661 6049",
    email: "mjsfoodproducts@gmail.com",
    socialMedia: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com",
        iconClass: "fab fa-facebook-f",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com",
        iconClass: "fab fa-instagram",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com",
        iconClass: "fab fa-youtube",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196304993946!2d144.95373631531698!3d-37.81627997975142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577bebae65121ec!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600413549686!5m2!1sen!2sau",
  },
};
