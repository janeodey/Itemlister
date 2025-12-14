
let form = document.getElementById("addForm")
let listItems = document.getElementById("itemsUl")
let filter = document.getElementById("filterItem")

// local storage
document.addEventListener("DOMContentLoaded", loadItems);

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

// load items from local storage
function loadItems(){
    let items = JSON.parse(localStorage.getItem("items")) || [];

    items.forEach(item=>{
        addItemToDOM(item)
    })
}

// create a reusable function to add items to DOM
function addItemToDOM(text){
    let li = document.createElement("li")
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(text));

    let btnContainer = document.createElement("div")

    let editBtn = document.createElement("button")
    editBtn.className = "btnEdit";
    editBtn.textContent = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btnlist"
    deleteBtn.textContent = "X"

    btnContainer.appendChild(editBtn)
    btnContainer.appendChild(deleteBtn)

    li.appendChild(btnContainer)
    listItems.appendChild(li)
}

// save items to localStorage
function getStoredItems(){
    return JSON.parse(localStorage.getItem("items")) || []
}

function saveItems(items){
    localStorage.setItem("items", JSON.stringify(items))
}


function todoList(e){
    e.preventDefault()

    // get input value
    let listValues = document.getElementById("itemsInput").value.trim();
    if(listValues === "") return;

    let items = getStoredItems();

    if(editMode){
        let oldText = itemToEdit.firstChild.textContent.trim()

        // update DOM
        itemToEdit.firstChild.textContent=listValues;

        // Update localstorage
        let index = items.indexOf(oldText)
        if(index > -1){
            items[index] = listValues;
        }

        editMode =false;
        itemToEdit = null
        document.querySelector("input[type='submit']").value = "Submit"
    }
    else{

        addItemToDOM(listValues);
        items.push(listValues);
        
        // create new li element
    // let li = document.createElement("li")
    // li.className = "list-group-item";    

    // li.appendChild(document.createTextNode(listValues))

    // // create edit and delete buttons
    // let deleteBtn = document.createElement("button");
    // let editBtn = document.createElement("button")

    // deleteBtn.className = "btnlist"
    // editBtn.className = "btnEdit"

    // editBtn.appendChild(document.createTextNode("Edit"))
    // deleteBtn.appendChild(document.createTextNode("X"))
   
    // li.appendChild(editBtn)
    // li.appendChild(deleteBtn)
    // // list main container
    // listItems.appendChild(li)
    }
    saveItems(items);

    // input.value = "";
    // input.focus();
    document.getElementById("itemsInput").value = "";
    document.getElementById("itemsInput").focus()
}

// remove item and edit items



function manageItem(e){
    let items = getStoredItems();

    // delete
    if(e.target.classList.contains("btnlist")){
        // if(confirm("are you sure?")){
        //     let li = e.target.parentElement;
        //     listItems.removeChild(li)
        // }
        // e.target.parentElement.parentElement.remove()
        let li = e.target.closest("li");
        let text = li.firstChild.textContent.trim()

        li.remove();

        items = items.filter(item => item !== text);
        saveItems(items)
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