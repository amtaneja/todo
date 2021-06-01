
var ul = document.getElementById('list')
var arr = []

var addButton = document.getElementById('add-item');
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove-item')
removeButton.addEventListener('click', removeItem)

var resetAll = document.getElementById('remove-all')
resetAll.addEventListener('click', removeAll)

var elem = document.getElementById('list_value');
elem.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
    addItem()   
  }
});


let localValue = localStorage.getItem('list')
let stringToArr = JSON.parse(localValue)
console.log(stringToArr)

for (let index = stringToArr.length - 1; index >= 0; index--) {

    var textnode = document.createTextNode(stringToArr[index])

    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('class', 'checkbox')
    let label = document.createElement('label')
    label.appendChild(textnode)
    label.setAttribute('class', 'strikethrough')
    let del = document.createElement('button')
    del.setAttribute('id', 'remove-item')
    del.addEventListener('click', removeItem)
    let icon = document.createElement('i')
    icon.setAttribute('class', 'fas fa-trash')
    del.appendChild(icon)
    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(del)
    ul.insertBefore(li, ul.childNodes[0])

    setTimeout(() => {
        li.className = 'visual'
    }, 3.5);

}



function addItem() {

    let element = document.getElementById('list_value').value
    if (element === '') {
        alert('enter your todo')

    } else {
        arr.unshift(element)

        let toString = JSON.stringify(arr)
        localStorage.setItem('list', toString)

        var textnode = document.createTextNode(element)

        let li = document.createElement('li')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('class', 'checkbox')
        let label = document.createElement('label')
        label.appendChild(textnode)
        label.setAttribute('class', 'strikethrough')
        let del = document.createElement('button')
        del.setAttribute('id', 'remove-item')
        del.addEventListener('click', removeItem)
        let icon = document.createElement('i')
        icon.setAttribute('class', 'fas fa-trash')
        del.appendChild(icon)
        li.appendChild(checkbox)
        li.appendChild(label)
        li.appendChild(del)
        ul.insertBefore(li, ul.childNodes[0])


        setTimeout(() => {
            li.className = 'visual'
        }, 3.5);

        document.getElementById('list_value').value = ''

    }
}


function removeItem() {
    li = ul.children
    console.log(li)
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
            arr.splice(index, 1)
            localStorage.setItem('list', JSON.stringify(arr))
        }

    }
}

function removeAll() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index]) {
            ul.removeChild(li[index])
            arr.splice(index, 1)
            console.log(arr)
            localStorage.setItem('list', JSON.stringify(arr))
        }

    }
}