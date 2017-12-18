var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var count = ingredients.length;

var x=0

while (x < count)
{
  console.log(ingredients[x]);
  x++;
}

// Write a for loop that prints out the contents of ingredients:

for (var y=0; y<count; y++)

{
  console.log(ingredients[y]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var y=0; y<count; y++)

{
  console.log(ingredients[count-1-y]);
}