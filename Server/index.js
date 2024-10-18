const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const category = [
  {
    image: "https://i.ibb.co/1nr3b6k/img1.jpg",
    name: "Breakfast",
    color: "#7082461A",
  },
  {
    image: "https://i.ibb.co/Jq5p583/img2.png",
    name: "Vegan",
    color: "#7082461A",
  },
  {
    image: "https://i.ibb.co/rvb1bxs/img3.png",
    name: "Meat",
    color: "#7082461A",
  },
  {
    image: "https://i.ibb.co/VYQmcvC/img4.png",
    name: "Dessert",
    color: "#7082461A",
  },
  {
    image: "https://i.ibb.co/WfcYR0B/img5.png",
    name: "Lunch",
    color: "#7082461A",
  },
  {
    image: "https://i.ibb.co/Nnp26M1/img6.png",
    name: "Chocolate",
    color: "#7082461A",
  },
];

const recipe = [
  {
    id: "1",
    image: "https://i.ibb.co/FxJtwtb/burger.png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    name: "Snack",
    nutrition: [
      {
        Calories: "219.9",
        TotalFat: "10",
        Protein: "20",
        Carbohydrate: "12",
        Cholesterol: "40",
      },
    ],
    maindish: ["Bun", "Cheese", "Beef", "Tomato", "Cabbage"],
    sauce: ["Chilly", "Mayo", "Tomato Ketchup"],
    direction: [
      {
        title: "Prepare the beef",
        direction:
          "Shape the Wagyu beef into two large patties, about ¾ inch thick. Season both sides with salt and pepper.",
      },
      {
        title: "Cook the patties",
        direction:
          "Heat a skillet or grill to medium-high. Cook the patties for 3-4 minutes on each side for medium-rare, or adjust the time for your preferred doneness.",
      },
      {
        title: "Add cheese:",
        direction:
          "In the last minute of cooking, place a slice of cheese on each patty and cover the skillet to let it melt.",
      },
      {
        title: "Toast the buns:",
        direction:
          "Spread butter on the burger buns and toast them in a skillet or grill until golden.",
      },
      {
        title: "Assemble the burger",
        direction:
          "Place the patty on the bun, add lettuce, tomato, onions, and pickles as desired. Add your favorite sauce.",
      },
      {
        title: "Serve",
        direction: "Close the burger with the top bun and serve hot!",
      },
    ],
  },
  {
    id: "2",
    image: "https://i.ibb.co/njk2SvB/fish.png",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    name: "Fish",
    nutrition: [
      {
        Calories: "250",
        TotalFat: "15",
        Protein: "22",
        Carbohydrate: "5",
        Cholesterol: "60",
      },
    ],
    maindish: ["Salmon", "Lime", "Ginger", "Garlic", "Olive Oil"],
    sauce: ["Ginger Sauce", "Lime Juice", "Soy Sauce"],
    direction: [
      {
        title: "Prepare the marinade",
        direction:
          "Mix lime juice, grated ginger, garlic, olive oil, and soy sauce in a bowl.",
      },
      {
        title: "Marinate the salmon",
        direction:
          "Coat the salmon fillets with the marinade and let them sit for 15 minutes.",
      },
      {
        title: "Roast the salmon",
        direction:
          "Preheat the oven to 400°F and roast the salmon for 12-15 minutes until cooked through.",
      },
      {
        title: "Serve",
        direction:
          "Drizzle with extra lime juice and garnish with fresh herbs. Serve with your favorite sides.",
      },
    ],
  },
  {
    id: "3",
    image: "https://i.ibb.co/hF79r5c/pancake.png",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    name: "Breakfast",
    nutrition: [
      {
        Calories: "180",
        TotalFat: "6",
        Protein: "5",
        Carbohydrate: "30",
        Cholesterol: "20",
      },
    ],
    maindish: ["Oats", "Strawberries", "Eggs", "Milk", "Flour"],
    sauce: ["Honey Syrup", "Maple Syrup"],
    direction: [
      {
        title: "Prepare the batter",
        direction:
          "Blend oats, flour, milk, eggs, and a pinch of salt until smooth. Fold in sliced strawberries.",
      },
      {
        title: "Cook the pancakes",
        direction:
          "Pour the batter onto a heated skillet and cook until bubbles form on the surface, then flip and cook until golden brown.",
      },
      {
        title: "Serve",
        direction:
          "Drizzle honey syrup over the pancakes and top with fresh strawberries.",
      },
    ],
  },
  {
    id: "4",
    image: "https://i.ibb.co/6BksfRF/sprouts.png",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    name: "Healthy",
    nutrition: [
      {
        Calories: "150",
        TotalFat: "8",
        Protein: "4",
        Carbohydrate: "18",
        Cholesterol: "5",
      },
    ],
    maindish: ["Lettuce", "Carrots", "Cucumber", "Tomatoes", "Mayonnaise"],
    sauce: ["Mayonnaise", "Olive Oil", "Lemon Juice"],
    direction: [
      {
        title: "Chop the vegetables",
        direction:
          "Dice lettuce, carrots, cucumber, and tomatoes into bite-sized pieces.",
      },
      {
        title: "Mix the dressing",
        direction:
          "Combine mayonnaise, olive oil, and lemon juice in a bowl.",
      },
      {
        title: "Toss the salad",
        direction:
          "In a large bowl, toss the chopped vegetables with the dressing until evenly coated.",
      },
      {
        title: "Serve",
        direction: "Serve chilled and garnish with fresh herbs.",
      },
    ],
  },
  {
    id: "5",
    image: "https://i.ibb.co/YWQ396q/cream.png",
    title: "Chicken Meatballs with Cream Cheese",
    time: "30 Minutes",
    name: "Meat",
    nutrition: [
      {
        Calories: "320",
        TotalFat: "22",
        Protein: "25",
        Carbohydrate: "10",
        Cholesterol: "70",
      },
    ],
    maindish: ["Chicken", "Cream Cheese", "Breadcrumbs", "Garlic", "Eggs"],
    sauce: ["Cream Cheese Sauce", "Garlic Butter"],
    direction: [
      {
        title: "Prepare the meatballs",
        direction:
          "Mix ground chicken, breadcrumbs, garlic, eggs, and cream cheese in a bowl. Form into small balls.",
      },
      {
        title: "Cook the meatballs",
        direction:
          "Pan-fry the meatballs in a skillet over medium heat until golden brown and cooked through.",
      },
      {
        title: "Prepare the sauce",
        direction:
          "In a saucepan, melt butter and mix with cream cheese until smooth. Add garlic and season with salt and pepper.",
      },
      {
        title: "Serve",
        direction:
          "Pour the sauce over the meatballs and serve with your choice of sides.",
      },
    ],
  },
  {
    id: "6",
    image: "https://i.ibb.co/PZV10SD/orange.png",
    title: "Fruity Pancake with Orange & Blueberry",
    time: "30 Minutes",
    name: "Sweet",
    nutrition: [
      {
        Calories: "200",
        TotalFat: "7",
        Protein: "6",
        Carbohydrate: "28",
        Cholesterol: "25",
      },
    ],
    maindish: ["Flour", "Eggs", "Milk", "Orange Zest", "Blueberries"],
    sauce: ["Honey Syrup", "Orange Juice"],
    direction: [
      {
        title: "Prepare the batter",
        direction:
          "Mix flour, eggs, milk, and orange zest into a smooth batter. Fold in blueberries.",
      },
      {
        title: "Cook the pancakes",
        direction:
          "Heat a skillet and pour the batter. Cook until bubbles form, then flip and cook until golden.",
      },
      {
        title: "Serve",
        direction:
          "Drizzle with honey syrup and serve with fresh orange slices and blueberries.",
      },
    ],
  },
];

app.get("/getCategory", (req, res) => {
  res.send(category);
});

app.get("/getRecipe", (req, res) => {
  res.send(recipe);
});

app.listen(8800, () => {
  console.log("running");
});
