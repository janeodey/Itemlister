
// // finding HTML ELEMENTS
// document.getElementById("demo")
// document.getElementsByClassName("className")
// document.getElementsByTagName("nameOfTag")
// finding html elements by CSS selectors (document.querySelector(".intro") & document.querySelectorAll(".intro"))
// finding HTML elements by HTML object collections

// // changing HMTL ELEMENTS
// element.innerHTML = new html content 
// element.attribute = new value
// element.style.property = new style
// element.setAttribute(attribute, value)

// // adding and deleting elements
// document.createElement(element)
// document.removeChild(element)
// document.appendChild(element)
// document.replaceChild(new, old)
// document.write(text)

// let tagOutcome = document.getElementsByTagName("p");

// let arrayVal = Array.from(tagOutcome)
// let output = ""
// arrayVal.forEach((item)=>{
//     output += item.textContent + "<br>"
    
// })
// document.getElementById("demo").innerHTML = output

// document.getElementById("demo").innerHTML = [...document.querySelectorAll("p")].map(item=>item.textContent).join("<br>");

// console.log([...document.querySelectorAll("p")]);

// console.log(document.querySelectorAll(".intro"));
// console.log([...document.querySelectorAll(".intro")]);


// document.getElementById("demo").innerHTML = [...document.querySelectorAll("p")].map(item=>item.textContent).join("<p></p>")


// let imageToChange = document.querySelector("#img1")
// imageToChange.src = "./images/image3.jpg"


// let btnSubmit = document.getElementById("btnSubmit");

// btnSubmit.addEventListener("click", myFunction);


// function myFunction(){
//     let numbers = document.getElementById("numb").value;
//     let text;

//     if(isNaN(numbers) || numbers < 1 || numbers > 10){
//         text = `Input is invalid`
//     }else{
//         text = `Text Correct`
//     }
//     document.getElementById("demo").innerHTML = text;
    
//     document.getElementById("numb").value = ""
//     document.getElementById("numb").focus()

// }
//   document.getElementById("demo").innerHTML = ""

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = "<ul> <h1>List of Fruits</h1>"

// text += fruits.map(fruit=> `<li>${fruit}</li>`).join("")
// text += "</ul>"

// document.getElementById("demo").innerHTML = text

const items = [
    {name: "Bike", price:100},
    {name: "TV", price:200},
    {name: "Album", price:10},
    {name: "Book", price:5},
    {name: "Phone", price:500},
    {name: "Computer", price:1000},
    {name: "Keyboard", price:25}
]

// let filterItems = items.filter(item=>{
//     return item.price <= 100
// })
// const results = filterItems.map(val=>{
//     let text="";
//     return text += `${val.name} - $${val.price}`
// }).join("</br>")

// document.getElementById("demo").innerHTML= results

// const results = items.find(item=>{
//     return item.name.toLowerCase() === "book"
// })
// console.log(results);

// document.getElementById("demo").innerHTML = results.name;

// let text = "<ul>"
// items.forEach(item=>{
//     return text += `<li> ${item.name} </li>`
// })
//  text += "</ul>"

// const text = items.some(cheap=>{
//     return cheap.price > 80
// })
// items.reduce((currentTotal, currentItem)=>{
//     return currentTotal + currentItem.price
// }, initialValue/starting point)

// const text = items.reduce((currentTotal, currentItem)=>{
//     return currentItem.price + currentTotal
// },0)
// document.getElementById("demo").innerHTML = text

// const nums = [1,2,3,4,5]
// console.log(nums);

// let result = nums.includes(nums.value)
// console.log(result);



const externalNumber = [1,2,3,4,5];
let submitBtn =document.getElementById("btnSubmit")

submitBtn.addEventListener("click", myFunction)

function myFunction(){
    
    let inputValue = Number(document.getElementById("numb").value);
    let outcome = externalNumber.includes(inputValue)

    console.log(outcome);
    
    document.getElementById("demo").innerHTML = outcome ? `value is ${outcome}`: `Value is ${outcome}`

    document.getElementById("numb").value = ""
    document.getElementById("numb").focus()

}


