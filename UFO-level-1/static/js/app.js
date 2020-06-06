// from data.js
var tableData = data;

// YOUR CODE HERE!
var inputField = d3.select("input.form-control");
var button = d3.select("button#filter-btn");
var form = d3.select("form");

function runFilter() {
    d3.event.preventDefault();

    let inputText = d3.select("input.form-control").property("value");

    console.log(`So you wanna find out about ${inputText}?`);
    
    let filteredTable = tableData.filter(sighting => sighting.datetime === inputText);
    
    const tableBody = d3.select("tbody");

    tableBody.html("");

    for (var i = 0; i < filteredTable.length; i++) {
        var row = tableBody.append("tr");
        row.append("td").text(filteredTable[i].datetime);
        row.append("td").text(filteredTable[i].city);
        row.append("td").text(filteredTable[i].state);
        row.append("td").text(filteredTable[i].country);
        row.append("td").text(filteredTable[i].shape);
        row.append("td").text(filteredTable[i].durationMinutes);
        row.append("td").text(filteredTable[i].comments);
    };
};

inputField.on("change", runFilter);
button.on("click", runFilter);
form.on("submit", runFilter);