export const menuData = {
  Food: {
    Pizza: [
      { name: "Margherita", img: require("../assets/pizza.jpg"), description: "Classic pizza with cheese and tomato.", price: "$10" },
      { name: "Pepperoni", img: require("../assets/pizza2.jpg"), description: "Spicy pepperoni with mozzarella.", price: "$12" },
        { name: "Pineapple ", img: require("../assets/pizza3.jpg"), description: "Pizza with Pineapple toppings.", price: "$14" },
          { name: "Sujok", img: require("../assets/pizza4.jpg"), description: "Pizza on Suojok flavor", price: "$13" },

    ],
    
    Shawarma: [
      { name: "Chicken Shawarma", img: require("../assets/shawarma.jpg"), description: "Grilled chicken with sauces.", price: "$8" },
      { name: "Beef Shawarma", img: require("../assets/shawarma2.jpg"), description: "Tender beef wrapped in bread.", price: "$9" }
    ],
    Burgers: [
      { name: "Cheeseburger", img: require("../assets/burgers.jpg"), description: "Juicy beef with cheese.", price: "$11" },
      { name: "Veggie Burger", img: require("../assets/burger2.jpg"), description: "Fresh veggie patty with sauce.", price: "$9" }
    ]
  },
  Drinks: {
    Coke: [
      { name: "Coca Cola", img: require("../assets/coke.jpg"), description: "Refreshing soda.", price: "$2" }
    ],
    Juice: [
      { name: "Cocktail Juice", img: require("../assets/juice.jpg"), description: "Freshly squeezed.", price: "$3" }
    ],
    Water: [
      { name: "Mineral Water", img: require("../assets/water.jpg"), description: "Pure water.", price: "$1" }
    ]
  }
};