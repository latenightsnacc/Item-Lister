// PART ONE //

// Examines the document //

// Logs details of  the entire document in the console
// console.dir(document);

// Logs the domain of the document in the console
// console.log(document.domain);

//Logs the url of the document in the console
// console.log(document.URL);

// Logs the title of the document in the console
// console.log(document.title);

// Changes the title of the page to Hello World!
// document.title = 'Hello World!';

// Logs the document type in the console
// console.log(document.doctype);

//Logs the head tag and contents within the head tag in the console
// console.log(document.head);

//Logs the body tag and contents within the body tag in the console
// console.log(document.body);

//Logs the collection of HTML elements of the document in the console
// console.log(document.all);

// Logs the HTML element with index 10 in the console
// console.log(document.all[10]);

// Changes the text content of the HTML element with index 10 in the document
// document.all[10].textContent = "Hello World!";

// Logs all forms in the document inside the console
// console.log(document.forms);

// Logs all links in the document inside the console
// console.log(document.links);

// Logs all images in the document inside the console
// console.log(document.images);

// GETELEMENTBYID //

// Logs the element with the inputted ID inside the console
// console.log(document.getElementById('header-title'));

// Creates a variable headerTitle and assigns the element with the selected id to the variable
// var headerTitle = document.getElementById('header-title');

// Creates a variable header and assigns the element with the selected id to the variable
// var header = document.getElementById('main-header');

// Changes the text content of the variable headerTitle
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Hello World';

// Changes the text content and HTML element of the variable
// headerTitle.innerHTML = '<h3>Item Lister</h3>';

// Changes the css border-bottom style of the variable
// header.style.borderBottom = 'solid 3px  #000';

// GETELEMENTSBYCLASSNAME //

// Creates a variaable and assigns all elements with the selected class name
// var items = document.getElementsByClassName('list-group-item');

// Logs the HTML collection associated with the variable 'items'
// console.log(items);

// Logs the second item in the items HTML collection
// console.log(items[1]);

// Changes the text content of the second item in the items HTML collection to Hello 2
// items[1].textContent = ' Hello 2';

// Changes css font weight style of the second item in the items HTML collection to bold
// items[1].style.fontWeight = 'bold';

// Changes css background color style of the second item in the items HTML collection to yellow
// items[1].style.backgroundColor = 'yellow';

// Gives an error
// items.style.backgroundColor = 'blue';

// Loops through each item and changes the css style for each item in the items HTML Collection
/*
for( let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'orange';
    items[i].style.marginBottom = '15px';
    items[i].style.color = 'white';
    items[i].style.fontWeight = 'bold';
    items[i].style.borderBottom = 'solid 2px  #ccc';
}
*/

// GETELEMENTSBYTAGNAME //

// Creates a variable li HTML Collection with all HTML elements with selected the HTML tag name 'li'
// let li = document.getElementsByTagName('li');

// Logs the HTML collection associated with the variable 'li'
// console.log(li);

// Logs the second ilist item in the li HTML collection
// console.log(li[1]);

// Changes the text content of the second list item in the li HTML collection to Hello 2
// li[1].textContent = ' Hello 2';

// Changes css font weight style of the second list item in the li HTML collection to bold
// li[1].style.fontWeight = 'bold';

// Changes css background color style of the second item in the li HTML collection to blue
// li[1].style.backgroundColor = 'blue';

// Gives an error
// li.style.backgroundColor = 'yellow';

// QUERYSELECTOR //
// Creates a variable 'header' and assigns the selected id 'main-header' to the variable header
// let header = document.querySelector('#main-header');

// Changes the css border bottom style of the variable header
// header.style.borderBottom = 'solid 4px #ccc';

// Creates a variable 'input' and assigns the selected html element 'input' to the variable input
// let input = document.querySelector('input');

// Changes the value text content of the input variable
// input.value = 'Hello world';

// Creates a variable 'submit' and assigns the selected html element 'input[type="submit"]' to the variable submit
let submit = document.querySelector('input[type="submit"]');

// Changes the value of the submit variable to 'SEND'
submit.value = "Add";

// Creates a variable 'item' and assigns the first child of the selected class '.list-group-item' to the variable 'item'
// let item = document.querySelector('.list-group-item');

// Logs the item variable HTML element inside the console
// console.log(item);

// Changes the css font color style of only the first child in the selected class group '.list-group-item'
// item.style.color = 'red';

// Creates a variable 'lastItem' and assigns the last child of the selected class '.list-group-item' to the variable 'lastItem'
// let lastItem = document.querySelector('.list-group-item:last-child');

// Changes the css font color style of the last child in the selected class group '.list-group-item'
// lastItem.style.color = 'green';

// Creates a variable 'secondItem' and assigns the second child of the selected class '.list-group-item' to the variable 'secondItem'
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');

// Changes the css font color style of the second child in the selected class group '.list-group-item'
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //

// Creates a variable titles and assigns all HTML elements with the selected class '.title' to the variable 'titles'
// let titles = document.querySelectorAll('.title');

// Logs the node list of HTML elements with the '.title' class
// console.log(titles);

// Changes the text content of the first title on the node list to 'Hello'
// titles[0].textContent = 'Hello';

// Creates a variable 'odd' and assings all the odd li items in the document to the variable
// let odd = document.querySelectorAll('li:nth-child(odd)');

// Creates a variable 'even' and assings all the even li items in the document to the variable
// let even = document.querySelectorAll('li:nth-child(even)');

// Loops through each item and changes the css style for each odd and even item in the li node list
/*
for (let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'orange';
    even[i].style.backgroundColor = 'whitesmoke';
}
*/

// PART TWO //

// TRAVERSING THE DOM //

let itemList = document.querySelector('#items');

// Using parentNode

// Logs the parent node of the variable 'itemList' into the console.
// console.log(itemList.parentNode);

// Changes the background color of the parent node to the itemList to a light grey color.
// itemList.parentNode.style.backgroundColor = '#f3f3f3';

// Logs the parent node of the parent node of the parent node of the itemList into the console.
// console.log(itemList.parentNode.parentNode.parentNode);

// Using parentElement

// Logs the parent element of the variable 'itemList' into the console.
// console.log(itemList.parentElement);

// Changes the background color of the parent element to the itemList to a light grey color.
// itemList.parentElement.style.backgroundColor = '#f3f3f3';

// Logs the parent element of the parent element of the itemList into the console.
// console.log(itemList.parentElement.parentElement);

// Using childNodes

// Logs a node list of the children in the variable 'itemList' including any whitespaces and line breaks.
// console.log(itemList.childNodes);

// Using children

// Logs a HTML collection of the children in the variable 'itemList' without any whitespaces or linebreaks
// console.log(itemList.children);

// Using firstChild

// Logs the first node on the node list
// console.log(itemList.firstChild);

// Using firstElementChild

// Logs the first child element on the HTML collection
// console.log(itemList.firstElementChild);

// Changes the css font weight style of the first element child on the HTML collection to bold.
// itemList.firstElementChild.style.fontWeight = 'bold';

// Using lastChild

// Logs the last node on the node list
// console.log(itemList.lastChild);

// Using lasttElementChild

// Logs the lasst child element on the HTML collection
// console.log(itemList.lastElementChild);

// Changes the text content of the last element child on the HTML collection to 'Hello 4'.
// itemList.lastElementChild.textContent = 'Hello 4';

// Using nextSibling

//Logs the next sibling of the itemList variable on the node list even if it is a whitespace.
// console.log(itemList.nextSibling);

// Using nextElementSibling

// Logs the next sibling element of the itemList variable on the HTML collection.
// console.log(itemList.nextElementSibling);

// Using previousSibling

//Logs the previous sibling of the itemList variable on the node list even if it is a whitespace.
// console.log(itemList.previousSibling);

// Using previousElementSibling

// Logs the previous sibling element of the itemList variable on the HTML collection.
// console.log(itemList.previousElementSibling);

// createElement

// Creates a variable newDiv and assigns a newly created element 'div' to it.
let newDiv = document.createElement('div');

// Add a class to the div
newDiv.className = 'hello';

// Add an id to the div
newDiv.id = 'hello1';

// Adds a title attribute with the value 'Hello Div' to the div.
newDiv.setAttribute('title', 'Hello Div');

// Create a text node
let newDivText = document.createTextNode('Hello World');

// Add the text node newDivText to the div.
newDiv.appendChild(newDivText);

// Creates a variable 'container' and assigns the selected class '.container' in the header tag to it.
let container = document.querySelector('header .container');

// Creates a variable 'h1' and assigns the selected HTML element h1 in the header tag to it.
let h1 = document.querySelector('header h1');

// Logs the created div in the console.
console.log(newDiv);

// Inserts the newDiv variable before the h1 variable inside the container variable in the document.
container.insertBefore(newDiv, h1);