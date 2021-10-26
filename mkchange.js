amount = 68;
quarters = Math.floor(amount/25);
remaining = amount%25;
dimes = Math.floor(remaining/10);
remaining = remaining%10;
nickles = Math.floor(remaining/5);
pennies =  amount%5;
console.log("quarters: "+quarters+", dimes: "+dimes+", nickles: "+nickles+", pennies: "+pennies)