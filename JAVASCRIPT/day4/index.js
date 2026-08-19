// for(let i=1;i<=5;i++){
//     console.log(i)
// }
// let fruits=["Mango","Banana","Apple","Kiwi"];

// for(let i=0;i<=fruits.length;i++){
//     console.log(fruits[i])
// }

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// for(let i=10;i>=1;i--){
//      console.log(i)
// }

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i=1;i<=10;i++){

//     if(i==5){
//     //  break
//     continue;
//     }
//    console.log(i);
// }

// let i=1
// while(i<=14){
//     console.log("Output",i);
//     i++
// }
// let j=1;
// while(j<1){
//     console.log("while",j)
//     j++
// }
// let a=1;
// do {
//     console.log("dowhile",a)
//     a++
// } while(a<1)

// let fruits=["apple","banana","orange","grapes","pineapple"];
// let data="my name is Abhisek"
// for(const val of data){
//     console.log(val);
// };
// for(let i=0;i<fruits.length;i++){
//     console.log(i)
//     console.log(fruits[i])
// }

// let userData={
//     id:1234,
//     name:"Karuna",
//     age:23,
//     role:"Senior Developer"

// }
// for(let key in userData){
//     // console.log(key);
//       console.log(userData[key])
// }

// for(let key in fruits){
//     console.log(key);
//       console.log(fruits[key])
// }


// let sum=0;
// for(let i=1;i<=5;i++){
//     console.log(i)
//    sum+=i
// }
// console.log(sum);
// let arr=[2,3,4];
// let sum2=0;
// for(let val of arr){
//     sum2+=val
// }
// console.log(sum2,"sum2 in for of")

const cartData=[
    {name:"laptop",price:60000},
    {name:"mouse",price:800},
    {name:"keyboard",price:1500},
    {name:"monitor",price:15000},
]
for(let value of cartData){
    console.log("product name =>",value.name)
}

for(let value of cartData){
    console.log("product price =>",value.price)
}
let totalPrice=0;
for(let value of cartData){
   totalPrice+=value.price
}
console.log("total price is =>",totalPrice)

for(let value of cartData){
  if(value.price>10000){
    console.log(value)
  }
}




