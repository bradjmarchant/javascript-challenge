// from data.js
var tableData = data;
var tbody=d3.select('tbody')
tableData.forEach((UFOdata) => {
    var row = tbody.append("tr");
    Object.values(UFOdata).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
