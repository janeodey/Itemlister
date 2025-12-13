
// // // console.dir(document)

// // // console.log(document.doctype);
// // // getElementsByTagName("li") works thesame way as getElementsBy ClassName("list-group-item")

// // let headerBorder = document.getElementById("header");
// // headerBorder.style.borderBottom = "3px solid #000"

// // let lists = document.getElementsByClassName("list-group-item")

// // lists[1].textContent="Jane"

// // for(let i = 0; i < lists.length;i++){
// //     lists[i].style.backgroundColor="#f4f4f4"
// // }

// // let sends = document.querySelector("input[type='submit'")
// // sends.value="SEND"

// // // let lastItem =document.querySelector(".list-group-item:last-child");

// // // lastItem.style.backgroundColor="purple"

// // let odd = document.querySelectorAll("li.list-group-item:nth-child(odd)");

// // for(let i =0; i<odd.length; i++){
// //     odd[i].style.backgroundColor="#ccc"
// // }


// let parents = document.querySelector(".list-items")

// // console.log(parents.parentNode.parentNode);
// // console.log(parents.parentElement.parentElement);

// parents.parentElement.style.backgroundColor="#ccc"
// parents.style.backgroundColor="#c1c1c1"

// // creata a div
// let newDiv = document.createElement("div")
// let newImg = document.createElement("img")

// newDiv.className = "Hello";
// newDiv.id="greetings";

// // add attribute
// newDiv.setAttribute("title","myname");
// // newImg.setAttribute("src","v.png");

// // create a text note
// let textNode = document.createTextNode("Hello World!");

// // add text to div
// newDiv.appendChild(textNode)

// let container = document.querySelector(".containers h2");
// let h1 = document.querySelector("#containers h3")

// container.insertBefore(newDiv, h1)

// // container.appendChild(newDiv);


// console.log(newDiv);

// let btn = document.getElementById("btn")
// let box = document.getElementById("box")
// let itemsInput = document.getElementById("itemsInput");

// box.addEventListener("mouseenter", myFunction)
// box.addEventListener("mouseleave", myFunction)
// box.addEventListener("mousemove", myFunction)
// itemsInput.addEventListener("keydown", myFunction)

// function myFunction(e){
//     console.log(e)
//     console.log(e.target.value);
    
    // console.log(e.target.id);
    // console.log(e.type);
    // let output = document.getElementById("output")
    // output.innerHTML= ` <h1>${e.target.id}</h1>`
    // let output= document.getElementById("output")
    // output.innerHtml = `<h1>MouseX: ${e.offsetX}</h1> <h1>MouseY: ${e.offsetY}</h1>`
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>Mousey:'+e.offsetY+'</h3>'
    // let output = document.getElementById("output")
    // output.innerHTML = e.type
    // output.innerHTML = "<h3>MouseX:" +e.offsetX+ "</h3><h3>MouseY:" +e.offsetY+"</h3>"
    // output.innerHTML = `<h2>MouseX: ${e.offsetX}</h2> <h2>MouseY: ${e.offsetY}</h2>`
    // box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${40})`;
    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
    
// }


// let header = document.getElementById("header-title").add



let form = document.getElementById("addForm")
let listItems = document.getElementById("itemsUl")
let filter = document.getElementById("filterItem")

let editMode = false;
let itemToEdit = null

// form submit
form.addEventListener("submit", todoList);

// delete event and edit items
listItems.addEventListener("click", manageItem)

// filter events
filter.addEventListener("keyup", filterItems)

// edit items
// listItems.addEventListener("click", updateItem)

function todoList(e){
    e.preventDefault()

    // get input value
    let listValues = document.getElementById("itemsInput").value.trim();
    if(listValues === "") return

    if(editMode){
        itemToEdit.firstChild.textContent=listValues;

        editMode =false;
        itemToEdit = null
        document.querySelector("input[type='submit']").value = "Submit"
    }
    else{
        // create new li element
    let li = document.createElement("li")
    li.className = "list-group-item";    

    li.appendChild(document.createTextNode(listValues))

    // create edit and delete buttons
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button")

    deleteBtn.className = "btnlist"
    editBtn.className = "btnEdit"

    editBtn.appendChild(document.createTextNode("Edit"))
    deleteBtn.appendChild(document.createTextNode("X"))
   
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
    // list main container
    listItems.appendChild(li)
    }

    document.getElementById("itemsInput").value = "";
    document.getElementById("itemsInput").focus()
}

// remove item and edit items



function manageItem(e){
    if(e.target.classList.contains("btnlist")){
        // if(confirm("are you sure?")){
        //     let li = e.target.parentElement;
        //     listItems.removeChild(li)
        // }
        // e.target.parentElement.parentElement.remove()
        e.target.closest("li").remove();
    }

    // edit item
    if(e.target.classList.contains("btnEdit")){
        editMode = true

        // itemToEdit = e.target.parentElement.parentElement;
        itemToEdit = e.target.closest("li")
        let oldText = itemToEdit.firstChild.textContent.trim();

        document.getElementById("itemsInput").value = oldText;

        // change submit button
        document.querySelector("input[type='submit']").value="Update"
    }
}


// filter items
function filterItems(e){
    // convert to lowercase
    let text = e.target.value.toLowerCase();
    // get lists
    let items = listItems.getElementsByTagName("li")
    // convert to an array
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;

        // if(itemName.toLowerCase().indexOf(text) != -1){
        //     item.style.display = "block"
        // }else{
        //     item.style.display="none"
        // }
        if(itemName.toLowerCase().includes(text)){
            item.style.display = "block"
        }else{
            item.style.display="none"
        }
    })
    
}