const table = document.getElementsByTagName('table')[0]
const addRow = document.getElementById('add-row')

function makeRow () {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

addRow.addEventListener("click", makeRow)

table.addEventListener('click', colorize)

function colorize (event) {
   const target = event.target
   if (target.className.length) {
    target.className = ''
  } else {
    target.className = 'red'
  }
}