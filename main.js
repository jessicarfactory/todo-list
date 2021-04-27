document.addEventListener('DOMContentLoaded', function() {
    // When the user clicks on the add button
    let addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTodoItem);

    let colourButton = document.getElementById('colourButton');
    colourButton.addEventListener('click', changeTextColour);
});

function addTodoItem() {
    // Retrieve the text from the input box
    let inputText = document.getElementById('todoInput').value;
    console.log(inputText);
    // Append this text to the list div <div id="todoItems"></div>
    let todoItem = document.createElement('p');
    todoItem.innerText = inputText;
    // <p>Input text</p>
    todoItem.id = 'item';
    todoItem.class = 'colourful';
    document.getElementById('todoItems').appendChild(todoItem);
};

function changeTextColour() {
    let colour = generateRandomColour();
    document.getElementById('todoItems').style.color = colour;
};

function generateRandomColour() {
    let colours = ['red', 'blue', 'purple', 'yellow', 'green', 'orange'];
    let randomNumber = Math.random() * colours.length; // return a number between 0 and 1 i.e. 0.4
    let randomNumberFloor = Math.floor(randomNumber); // rounds the number down to the nearest whole integer i.e. 1.6 becomes 1
    return colours[randomNumberFloor];
};

console.log(generateRandomColour());