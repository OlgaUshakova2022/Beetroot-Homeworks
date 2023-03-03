
const shoppingList = [
    {
        name: "Печиво",
        quantity: 1,
        bought: false,
        price: 35,
        sum: 0
    },
    {
        name: "Хліб",
        quantity: 2,
        bought: true,
        price: 30,
        sum: 0
    },
    {
        name: "Яблука",
        quantity: 3,
        bought: false,
        price: 10,
        sum: 0
    },
    {
        name: "М'ясо",
        quantity: 1,
        bought: false,
        price: 140,
        sum: 0
    }
  ];
  

  function showShoppingList(list) {
    
    const sortedList = list.sort((a, b) => a.bought - b.bought);
   
    for (const item of sortedList) {
      console.log(`${item.name} | ${item.quantity} | ${item.bought ? 'Куплено' : 'Не куплено'} | ${item.price} | ${item.sum}`);
    }
  }
  
  
  function buyProduct(list, name) {

    const product = list.find(item => item.name === name);
    
  
    if (product) {
      product.bought = true;
    } else {
      console.log("Немає такого товару!");
    }
  }
  
  showShoppingList(shoppingList);
  buyProduct(shoppingList, "Молоко");
  showShoppingList(shoppingList);
  
-----------------------------------------------------------------------------------------











