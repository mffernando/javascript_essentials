function makeCoffee(sugar, milk)
{
    var instructions = "Boil water,";
    instructions += " pour into cup,";
    instructions += " add coffee granules,";
    instructions += " add " + sugar + " spoons of sugar,";
    instructions += " add " + milk + "% of milk.";
    
    return instructions;
}

//show
console.log(makeCoffee(2, 20));