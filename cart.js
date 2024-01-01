///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// const finalPrice = (cartTotal, couponValue, tax) => {
//     return cartTotal[0].price + tax - couponValue;
// }


//Cannot figure this out! Can you help me?
const calcFinalPrice = (cartTotal, couponValue = 4, tax = 0.5) => {
    return cartTotal.price + tax - couponValue;
};
const newPrice = cart.map(calcFinalPrice);
console.log(newPrice);


//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE

    I choose name, phone, address, status propertis in the customer object, becasue these are the really important information.
    I set name and address data as string type because they include characters.
    I set phone data as an int type since numbers are digits.
    I set status data as boolean to check if this customer is new or not.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'Keven',
    phone: 91256742304,
    address: '100 TEST RD, CA 10203',
    status: true
}