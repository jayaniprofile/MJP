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
