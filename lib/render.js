var Table = require('cli-table');

module.exports = render;

function render(data) {

  var table = new Table({
    head: data.head
  })

  data.data.forEach(function (d) {
    table.push(d)
  })

  console.log(table.toString());
  return
}
