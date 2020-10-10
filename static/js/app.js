var tableData = data;
var tbody=d3.select('tbody')
function popTable(ufoData) {
    tbody.html("")
    ufoData.forEach((spaceData) => {
    var row = tbody.append("tr");
    Object.values(spaceData).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
popTable(tableData)

  var button = d3.select("#filter-btn");
  button.on("click", runEnter);

  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
   
    var filteredData = tableData
    filteredData = filteredData.filter(UFO => UFO.datetime === inputValue);
    popTable(filteredData)
    
  };
  
