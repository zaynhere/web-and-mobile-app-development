
var list = document.getElementById('list')

function addTodo() {
    var getInput = document.getElementById('inputField')
    if (getInput.value !== "") {

        // adding list item
        var li = document.createElement("li")
        var liText = document.createTextNode(getInput.value)
        li.setAttribute("id", "todoitem")
        li.setAttribute("class" , "li")
        li.appendChild(liText)
        list.appendChild(li)

        // adding dltbtn with li
        var dltbtn = document.createElement("i")
        dltbtn.setAttribute("class", "fa fa-trash")
        dltbtn.setAttribute("aria-hidden" , "true")
        dltbtn.setAttribute("onclick", "dltitem(this)")
        li.appendChild(dltbtn)



        // adding edit button with li
        var editbtn = document.createElement("i")
        editbtn.setAttribute("class", "fa fa-edit")
        editbtn.setAttribute("aria-hidden" , "true")
        editbtn.setAttribute("onclick", "editItem(this)")
        li.appendChild(editbtn)



        // clear the input field
        getInput.value = ""

    } else {
        alert("please add todo item")
    }





}

// delete all list items
function dltAll() {
    list.innerHTML = ""
}

function dltitem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var edit = prompt("edit todo item", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit
}