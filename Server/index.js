const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())

const category = [
  {
    image:
      "https://i.ibb.co/1nr3b6k/img1.jpg",
    name: "Breakfast",
    color:"#7082461A",
  },
  {
    image:
      "https://i.ibb.co/Jq5p583/img2.png",
    name: "Vegan",
    color:"#7082461A",
  },
  {
    image:
      "https://i.ibb.co/rvb1bxs/img3.png",
    name: "Meat",
    color:"#7082461A",
  },
  {
    image:
      "https://i.ibb.co/VYQmcvC/img4.png",
    name: "Dessert",
    color:"#7082461A",
  },
  {
    image:
      "https://i.ibb.co/WfcYR0B/img5.png",
    name: "Lunch",
    color:"#7082461A",
  },
  {
    image:
      "https://i.ibb.co/Nnp26M1/img6.png",
    name: "Chocolate",
    color:"#7082461A",
  },
];

const recipe =[
  {
    image:"https://i.ibb.co/FxJtwtb/burger.png",
    title:"Big and Juicy Wagyu Beef Cheeseburger",
    time:"30 Minutes",
    name:"Snack",
  },
  {
    image:"https://i.ibb.co/njk2SvB/fish.png",
    title:"Fresh Lime Roasted Salmon with Ginger Sauce",
    time:"30 Minutes",
    name:"Fish",
  },
  {
    image:"https://i.ibb.co/hF79r5c/pancake.png",
    title:"Strawberry Oatmeal Pancake with Honey Syrup",
    time:"30 Minutes",
    name:"Breakfast",
  },
  {
    image:"https://i.ibb.co/6BksfRF/sprouts.png",
    title:"Fresh and Healthy Mixed Mayonnaise Salad",
    time:"30 Minutes",
    name:"Healthy",
  },
  {
    image:"https://i.ibb.co/YWQ396q/cream.png",
    title:"Chicken Meatballs with Cream Cheese",
    time:"30 Minutes",
    name:"Meat",
  },
  {
    image:"https://i.ibb.co/PZV10SD/orange.png",
    title:"Fruity Pancake with Orange & Blueberry",
    time:"30 Minutes",
    name:"Sweet",
  },

]
app.get("/getCategory", (req, res) => {
    res.send(category)
});

app.get("/getRecipe", (req,res)=>{
    res.send(recipe)
})

app.listen(8800, () => {
  console.log("running");
});
