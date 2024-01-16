function calculateCartPrice(...num1){
 return num1
}
// console.log(calculateCartPrice(200,400,500))
const user={
    username:"varsha",
    price:199

}
function handleObject(anyobject){
    console.log(`Usernmae is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
