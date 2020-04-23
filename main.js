let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', delItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// This function adds a new li element to the list.
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item');

    // Create new li element
    let li = document.createElement('li');

    // Add class to li element
    li.className = 'list-group-item';
    console.log(li);

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // create delete button element
    let delBtn = document.createElement('button');

    // add classes to delete button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node to delete btn
    delBtn.appendChild(document.createTextNode('X'));

    // Append delbtn to li element
    li.appendChild(delBtn);

    // Append li element to list
    itemList.appendChild(li);
}

// This function deletes an item from the list.
function delItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}

// This function filters the list items.
function filterItems(e){
    //converts text to lowercase
    let text = e.target.value.toLowerCase();

    let items = itemList.getElementsByTagName('li');

    // converts HTML collection to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}