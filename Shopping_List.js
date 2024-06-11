const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList.push('fruit loops');
shoppingList[4] = 'fair trade coffee';
shoppingList[2] = 'rice';
shoppingList[3] = 'beans';
console.log(shoppingList);
const shoppingCart = [];
shoppingList.pop();
shoppingCart.push('coffee');
console.log(shoppingCart);
shoppingList.shift();
shoppingCart.push('pop tarts');

let i = 0;
while(i < shoppingList.length) {
    
    shoppingCart.push(shoppingList[i]);
    i++;
}
console.log(shoppingCart);
shoppingCart.sort();
console.log(shoppingCart);
shoppingCart.join(',');
console.log(shoppingCart);
let list = shoppingCart.join(', ');
console.log(list);