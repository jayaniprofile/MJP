import choco from "../images/choco.jpeg";
import butter from "../images/butter.jpeg";
import cup from "../images/cup.jpeg";
import icing from "../images/icing.jpeg";
import kottu from "../images/kottu.jpeg";
import godamba from "../images/godamba.jpeg";
import parata from "../images/parata.jpeg";
import lasagna from "../images/lasagna.jpeg";

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
