const table = document.getElementsByTagName('table')[0]
const addRow = document.getElementById('add-row')
const changeColor = document.getElementById('selectMenu')

let chosenColor = 'red'

function makeRow () {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}
// Make a row by clicking the Add Row button
addRow.addEventListener("click", makeRow)

// Color a cell by clicking it
table.addEventListener('click', colorize)

// Display the color that was selected in the Console
changeColor.addEventListener('change', function(event) {
  chosenColor = event.target.value;
});

// Color a cell
function colorize (event) {
   const target = event.target
   if (target.className === chosenColor) {
    target.className = ''
  } else {
    target.className = chosenColor;
  }
}